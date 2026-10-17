/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavView } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { CourseDetailView } from './views/CourseDetailView';
import { StudyReaderView } from './views/StudyReaderView';
import { PastQuestionsView } from './views/PastQuestionsView';
import { NotesView } from './views/NotesView';
import { ProgressView } from './views/ProgressView';
import { AddCourseModal } from './components/AddCourseModal';
import { AddDocumentModal } from './components/AddDocumentModal';
import { AITutorChat } from './components/AITutorChat';
import { Sparkles } from 'lucide-react';
import {
  Course,
  PastExamQuestionItem,
  PersonalNote,
  Bookmark,
  UserProgress,
  StudyUnit,
  StudyTopic,
  QuestionMistakeRecord,
  WrittenEvaluationResult,
  UnitStatus
} from './types';
import {
  getStoredCourses,
  saveStoredCourses,
  getStoredPastQuestions,
  saveStoredPastQuestions,
  getStoredNotes,
  saveStoredNotes,
  getStoredBookmarks,
  saveStoredBookmarks,
  getStoredProgress,
  saveStoredProgress,
  loadSampleFMS304,
  loadSampleENT302,
  loadSampleENT304,
  loadSampleENT308,
  loadSampleCSC202,
  clearLibraryData,
  triggerManualDeduplication,
  getStoredConsolidationReport,
} from './services/storage';

export default function App() {
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [courses, setCourses] = useState<Course[]>([]);
  const [pastQuestions, setPastQuestions] = useState<PastExamQuestionItem[]>([]);
  const [notes, setNotes] = useState<PersonalNote[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [progress, setProgress] = useState<UserProgress>({
    completedTopicIds: [],
    unitStatuses: {},
    readingMinutesByCourse: {},
    totalMinutesStudied: 0,
    flaggedForRevisionTopicIds: [],
    revisionCount: 0,
    quizScores: {},
    writtenEvaluations: {},
    mistakesBank: [],
  });

  // Navigation sub-states
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeReadingTopic, setActiveReadingTopic] = useState<{
    courseId: string;
    unitId: string;
    topicId: string;
  } | null>(null);

  // Modals & Chatbot
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  const [isAddDocumentModalOpen, setIsAddDocumentModalOpen] = useState(false);
  const [globalAiTutorOpen, setGlobalAiTutorOpen] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const loadedCourses = getStoredCourses();
    const loadedPQ = getStoredPastQuestions();
    const loadedNotes = getStoredNotes();
    const loadedBookmarks = getStoredBookmarks();
    const loadedProgress = getStoredProgress();

    setCourses(loadedCourses);
    setPastQuestions(loadedPQ);
    setNotes(loadedNotes);
    setBookmarks(loadedBookmarks);
    setProgress(loadedProgress);
  }, []);

  // Update handlers
  const handleCourseCreated = (newCourse: Course) => {
    const updated = [newCourse, ...courses];
    setCourses(updated);
    saveStoredCourses(updated);
    // Switch to the newly created course's dashboard
    setSelectedCourseId(newCourse.id);
    setCurrentView('courses');
  };

  const handleDocumentAdded = (updatedCourse: Course) => {
    const updated = courses.map((c) => (c.id === updatedCourse.id ? updatedCourse : c));
    setCourses(updated);
    saveStoredCourses(updated);
  };

  const handleDeleteCourse = (courseId: string) => {
    const updated = courses.filter((c) => c.id !== courseId);
    setCourses(updated);
    saveStoredCourses(updated);
    if (selectedCourseId === courseId) {
      setSelectedCourseId(null);
    }
    if (activeReadingTopic?.courseId === courseId) {
      setActiveReadingTopic(null);
    }
  };

  const handleSelectTopic = (courseId: string, unitId: string, topicId: string) => {
    setActiveReadingTopic({ courseId, unitId, topicId });
    // Update last studied topic in progress
    const updatedProgress: UserProgress = {
      ...progress,
      lastActiveCourseId: courseId,
      lastActiveUnitId: unitId,
      lastActiveTopicId: topicId,
    };
    setProgress(updatedProgress);
    saveStoredProgress(updatedProgress);
  };

  const handleMarkTopicCompleted = (topicId: string) => {
    if (!progress.completedTopicIds.includes(topicId)) {
      const updatedProgress: UserProgress = {
        ...progress,
        completedTopicIds: [...progress.completedTopicIds, topicId],
      };
      setProgress(updatedProgress);
      saveStoredProgress(updatedProgress);
    }
  };

  const handleSetUnitStatus = (unitId: string, status: UnitStatus) => {
    const updatedProgress: UserProgress = {
      ...progress,
      unitStatuses: {
        ...progress.unitStatuses,
        [unitId]: status,
      },
    };
    setProgress(updatedProgress);
    saveStoredProgress(updatedProgress);
  };

  const handleToggleRevisionFlag = (topicId: string) => {
    const currentFlags = progress.flaggedForRevisionTopicIds || [];
    const exists = currentFlags.includes(topicId);
    const updatedFlags = exists
      ? currentFlags.filter((id) => id !== topicId)
      : [...currentFlags, topicId];

    const updatedProgress: UserProgress = {
      ...progress,
      flaggedForRevisionTopicIds: updatedFlags,
      revisionCount: exists ? progress.revisionCount : (progress.revisionCount || 0) + 1,
    };
    setProgress(updatedProgress);
    saveStoredProgress(updatedProgress);
  };

  const handleRecordQuizScore = (
    topicId: string,
    score: number,
    total: number,
    newMistakes: QuestionMistakeRecord[]
  ) => {
    const existing = progress.quizScores[topicId];

    // Filter out previous mistakes for this topic to avoid duplicate records
    const previousOtherMistakes = (progress.mistakesBank || []).filter(
      (m) => m.topicId !== topicId
    );

    const updatedProgress: UserProgress = {
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [topicId]: {
          score,
          total,
          attempts: (existing?.attempts || 0) + 1,
          timestamp: new Date().toISOString(),
        },
      },
      mistakesBank: [...newMistakes, ...previousOtherMistakes],
    };
    setProgress(updatedProgress);
    saveStoredProgress(updatedProgress);
  };

  const handleRecordWrittenEvaluation = (
    topicId: string,
    evaluations: WrittenEvaluationResult[]
  ) => {
    const updatedProgress: UserProgress = {
      ...progress,
      writtenEvaluations: {
        ...progress.writtenEvaluations,
        [topicId]: evaluations,
      },
    };
    setProgress(updatedProgress);
    saveStoredProgress(updatedProgress);
  };

  const handleClearMistakeRecord = (mistakeId: string) => {
    const updatedMistakes = (progress.mistakesBank || []).filter((m) => m.id !== mistakeId);
    const updatedProgress: UserProgress = {
      ...progress,
      mistakesBank: updatedMistakes,
    };
    setProgress(updatedProgress);
    saveStoredProgress(updatedProgress);
  };

  const handleToggleBookmark = (course: Course, unit: StudyUnit, topic: StudyTopic) => {
    const exists = bookmarks.some((b) => b.topicId === topic.id);
    let updated: Bookmark[];
    if (exists) {
      updated = bookmarks.filter((b) => b.topicId !== topic.id);
    } else {
      const newBm: Bookmark = {
        id: `bm-${Date.now()}`,
        courseId: course.id,
        unitId: unit.id,
        topicId: topic.id,
        courseTitle: course.title,
        unitTitle: unit.title,
        topicTitle: topic.title,
        savedAt: new Date().toISOString(),
      };
      updated = [newBm, ...bookmarks];
    }
    setBookmarks(updated);
    saveStoredBookmarks(updated);
  };

  const handleRemoveBookmark = (bookmarkId: string) => {
    const updated = bookmarks.filter((b) => b.id !== bookmarkId);
    setBookmarks(updated);
    saveStoredBookmarks(updated);
  };

  const handleSaveNote = (noteData: Omit<PersonalNote, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: PersonalNote = {
      ...noteData,
      id: `note-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    saveStoredNotes(updated);
  };

  const handleUpdateNote = (id: string, title: string, content: string) => {
    const updated = notes.map((n) =>
      n.id === id ? { ...n, title, content, updatedAt: new Date().toISOString() } : n
    );
    setNotes(updated);
    saveStoredNotes(updated);
  };

  const handleDeleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    saveStoredNotes(updated);
  };

  const handleBatchAddPastQuestions = (newQuestions: PastExamQuestionItem[]) => {
    const updated = [...newQuestions, ...pastQuestions];
    setPastQuestions(updated);
    saveStoredPastQuestions(updated);
  };

  const handleLoadPresetCourse = (presetType: 'fms' | 'ent' | 'ent304' | 'ent308' | 'csc') => {
    if (presetType === 'ent308') {
      const res = loadSampleENT308();
      setCourses(res.courses);
      setPastQuestions(res.pastQuestions);
    } else if (presetType === 'ent304') {
      const res = loadSampleENT304();
      setCourses(res.courses);
      setPastQuestions(res.pastQuestions);
    } else if (presetType === 'fms') {
      const res = loadSampleFMS304();
      setCourses(res.courses);
      setPastQuestions(res.pastQuestions);
    } else if (presetType === 'ent') {
      const res = loadSampleENT302();
      setCourses(res.courses);
      setPastQuestions(res.pastQuestions);
    } else if (presetType === 'csc') {
      const res = loadSampleCSC202();
      setCourses(res.courses);
    }
  };

  const handleResetLibrary = () => {
    if (
      confirm(
        'Are you sure you want to reset your study vault? This returns the app to its clean starting state.'
      )
    ) {
      clearLibraryData();
      setCourses([]);
      setPastQuestions([]);
      setNotes([]);
      setBookmarks([]);
      setProgress({
        completedTopicIds: [],
        unitStatuses: {},
        readingMinutesByCourse: {},
        totalMinutesStudied: 0,
        flaggedForRevisionTopicIds: [],
        revisionCount: 0,
        quizScores: {},
        writtenEvaluations: {},
        mistakesBank: [],
      });
      setSelectedCourseId(null);
      setActiveReadingTopic(null);
      setCurrentView('home');
    }
  };

  // Resolve currently active reading topic
  const activeCourse = courses.find((c) => c.id === activeReadingTopic?.courseId);
  let activeUnit: StudyUnit | null = null;
  let activeTopic: StudyTopic | null = null;
  if (activeCourse && activeReadingTopic) {
    for (const mod of activeCourse.modules) {
      const u = mod.units.find((unit) => unit.id === activeReadingTopic.unitId);
      if (u) {
        activeUnit = u;
        const t = u.topics.find((top) => top.id === activeReadingTopic.topicId);
        if (t) {
          activeTopic = t;
          break;
        }
      }
    }
  }

  // Handle main navigation selection:
  // "Start Studying" always opens the Choose Your Course screen without auto-selecting any fixed course!
  const handleNavigate = (view: NavView) => {
    setActiveReadingTopic(null);
    if (view === 'start-studying') {
      setSelectedCourseId(null);
      setCurrentView('courses');
      return;
    }

    if (view === 'courses') {
      setSelectedCourseId(null);
    }

    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#191C1A]">
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenAddCourse={() => setIsAddCourseModalOpen(true)}
        onOpenAITutor={() => setGlobalAiTutorOpen(true)}
        coursesCount={courses.length}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {/* If Active Reading Topic, prioritize Study Reader View */}
        {activeCourse && activeUnit && activeTopic ? (
          <StudyReaderView
            course={activeCourse}
            currentUnit={activeUnit}
            currentTopic={activeTopic}
            isBookmarked={bookmarks.some((b) => b.topicId === activeTopic!.id)}
            isRevisionFlagged={
              progress.flaggedForRevisionTopicIds?.includes(activeTopic!.id) || false
            }
            notes={notes}
            completedTopicIds={progress.completedTopicIds}
            onBackToCourse={() => {
              setActiveReadingTopic(null);
              setSelectedCourseId(activeCourse.id);
              setCurrentView('courses');
            }}
            onSelectTopic={handleSelectTopic}
            onToggleBookmark={handleToggleBookmark}
            onToggleRevisionFlag={handleToggleRevisionFlag}
            onSaveNote={handleSaveNote}
            onMarkTopicCompleted={handleMarkTopicCompleted}
            onSetUnitStatus={handleSetUnitStatus}
            onRecordQuizScore={handleRecordQuizScore}
            onRecordWrittenEvaluation={handleRecordWrittenEvaluation}
          />
        ) : (
          <>
            {currentView === 'home' && (
              <HomeView
                courses={courses}
                progress={progress}
                onNavigate={handleNavigate}
                onOpenAddCourse={() => setIsAddCourseModalOpen(true)}
                onSelectCourseAndTopic={(cId, uId, tId) => {
                  setSelectedCourseId(cId);
                  handleSelectTopic(cId, uId, tId);
                }}
              />
            )}

            {currentView === 'courses' && (
              <>
                {selectedCourseId ? (
                  (() => {
                    const c = courses.find((x) => x.id === selectedCourseId);
                    if (!c) {
                      return (
                        <CoursesView
                          courses={courses}
                          progress={progress}
                          onOpenAddCourse={() => setIsAddCourseModalOpen(true)}
                          onSelectCourse={(id) => setSelectedCourseId(id)}
                          onDeleteCourse={handleDeleteCourse}
                          onSelectTopic={handleSelectTopic}
                          onLoadPresetCourse={handleLoadPresetCourse}
                          onReloadCourses={() => setCourses(getStoredCourses())}
                        />
                      );
                    }
                    return (
                      <CourseDetailView
                        course={c}
                        progress={progress}
                        notes={notes}
                        pastQuestions={pastQuestions}
                        onBack={() => setSelectedCourseId(null)}
                        onSelectTopic={handleSelectTopic}
                        onOpenAddDocument={() => setIsAddDocumentModalOpen(true)}
                        onStartCoursePractice={(courseId) => {
                          setCurrentView('past-questions');
                        }}
                        onSetUnitStatus={handleSetUnitStatus}
                      />
                    );
                  })()
                ) : (
                  <CoursesView
                    courses={courses}
                    progress={progress}
                    onOpenAddCourse={() => setIsAddCourseModalOpen(true)}
                    onSelectCourse={(id) => setSelectedCourseId(id)}
                    onDeleteCourse={handleDeleteCourse}
                    onSelectTopic={handleSelectTopic}
                    onLoadPresetCourse={handleLoadPresetCourse}
                    onReloadCourses={() => setCourses(getStoredCourses())}
                  />
                )}
              </>
            )}

            {currentView === 'past-questions' && (
              <PastQuestionsView
                courses={courses}
                pastQuestions={pastQuestions}
                onAddPastQuestion={(q) => handleBatchAddPastQuestions([q])}
                onBatchAddPastQuestions={handleBatchAddPastQuestions}
                onOpenAddCourse={() => setIsAddCourseModalOpen(true)}
              />
            )}

            {currentView === 'notes' && (
              <NotesView
                notes={notes}
                courses={courses}
                onSaveNote={handleSaveNote}
                onUpdateNote={handleUpdateNote}
                onDeleteNote={handleDeleteNote}
                onOpenCourse={(cId) => {
                  setSelectedCourseId(cId);
                  setCurrentView('courses');
                }}
              />
            )}

            {currentView === 'progress' && (
              <ProgressView
                courses={courses}
                progress={progress}
                bookmarks={bookmarks}
                onSelectTopic={handleSelectTopic}
                onRemoveBookmark={handleRemoveBookmark}
                onToggleRevisionFlag={handleToggleRevisionFlag}
                onClearMistakeRecord={handleClearMistakeRecord}
                onOpenAddCourse={() => setIsAddCourseModalOpen(true)}
              />
            )}
          </>
        )}
      </div>

      {/* Global Modals */}
      <AddCourseModal
        isOpen={isAddCourseModalOpen}
        onClose={() => setIsAddCourseModalOpen(false)}
        onCourseCreated={handleCourseCreated}
        existingCourseCodes={courses.map((c) => c.code)}
        existingCourses={courses}
        onSelectExistingCourse={(id) => {
          setSelectedCourseId(id);
          setCurrentView('courses');
        }}
      />

      {selectedCourseId && courses.find((c) => c.id === selectedCourseId) && (
        <AddDocumentModal
          isOpen={isAddDocumentModalOpen}
          onClose={() => setIsAddDocumentModalOpen(false)}
          course={courses.find((c) => c.id === selectedCourseId)!}
          onDocumentAdded={handleDocumentAdded}
        />
      )}

      {/* Global AI Tutor Chatbot */}
      {courses.length > 0 && (
        <AITutorChat
          course={courses.find((c) => c.id === selectedCourseId) || courses[0]}
          isOpen={globalAiTutorOpen}
          onClose={() => setGlobalAiTutorOpen(false)}
        />
      )}

      {/* Quick Floating AI Tutor button if not currently reading in study view */}
      {!activeCourse && courses.length > 0 && !globalAiTutorOpen && (
        <button
          onClick={() => setGlobalAiTutorOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#1E3A2F] text-white rounded-full shadow-lg hover:bg-[#152B22] transition-all hover:scale-105 active:scale-95"
          title="Open StudyVault AI Tutor"
        >
          <Sparkles className="w-4 h-4 text-[#C88A36]" />
          <span className="text-xs font-semibold">AI Tutor</span>
        </button>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
