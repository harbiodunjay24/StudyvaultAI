import React, { useState } from 'react';
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Bookmark as BookmarkIcon,
  Trash2,
  Flag,
  AlertTriangle,
  RotateCcw,
  Check
} from 'lucide-react';
import { Course, UserProgress, Bookmark, QuestionMistakeRecord } from '../types';

interface ProgressViewProps {
  courses: Course[];
  progress: UserProgress;
  bookmarks: Bookmark[];
  onSelectTopic: (courseId: string, unitId: string, topicId: string) => void;
  onRemoveBookmark: (bookmarkId: string) => void;
  onToggleRevisionFlag: (topicId: string) => void;
  onClearMistakeRecord: (mistakeId: string) => void;
  onOpenAddCourse: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  courses,
  progress,
  bookmarks,
  onSelectTopic,
  onRemoveBookmark,
  onToggleRevisionFlag,
  onClearMistakeRecord,
  onOpenAddCourse,
}) => {
  const [activeTab, setActiveTab] = useState<'reading' | 'revision' | 'assessment'>('reading');

  // Aggregate stats
  let totalTopics = 0;
  courses.forEach((c) => {
    c.modules.forEach((m) => {
      m.units.forEach((u) => {
        totalTopics += u.topics.length;
      });
    });
  });

  const completedCount = progress.completedTopicIds.length;
  const overallPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  // Quiz statistics
  const quizEntries = Object.values(progress.quizScores);
  let totalQuizQuestionsAnswered = 0;
  let totalQuizScore = 0;
  quizEntries.forEach((q) => {
    totalQuizScore += q.score;
    totalQuizQuestionsAnswered += q.total;
  });
  const quizAccuracy =
    totalQuizQuestionsAnswered > 0
      ? Math.round((totalQuizScore / totalQuizQuestionsAnswered) * 100)
      : 0;

  // Find all topics flagged for revision
  const revisionTopics: { course: Course; unitTitle: string; topicId: string; topicTitle: string; unitId: string }[] = [];
  courses.forEach((c) => {
    c.modules.forEach((m) => {
      m.units.forEach((u) => {
        u.topics.forEach((t) => {
          if (progress.flaggedForRevisionTopicIds?.includes(t.id)) {
            revisionTopics.push({
              course: c,
              unitTitle: u.title,
              topicId: t.id,
              topicTitle: t.title,
              unitId: u.id,
            });
          }
        });
      });
    });
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#585E5A] mb-1">
            <span>Academic Ledger</span>
            <span aria-hidden="true">·</span>
            <span>Segregated Study Analytics</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191C1A]">
            My Progress & Retention Hub
          </h2>
        </div>

        {/* 3 Segregated Tracking Tabs strictly per prompt */}
        <div className="flex items-center gap-1 p-1 bg-[#F0ECE4] rounded-lg">
          <button
            onClick={() => setActiveTab('reading')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'reading' ? 'bg-white text-[#191C1A] shadow-xs' : 'text-[#585E5A] hover:text-[#191C1A]'
            }`}
          >
            1. Reading ({completedCount}/{totalTopics})
          </button>
          <button
            onClick={() => setActiveTab('revision')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'revision' ? 'bg-white text-[#191C1A] shadow-xs' : 'text-[#585E5A] hover:text-[#191C1A]'
            }`}
          >
            2. Revision ({revisionTopics.length})
          </button>
          <button
            onClick={() => setActiveTab('assessment')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'assessment' ? 'bg-white text-[#191C1A] shadow-xs' : 'text-[#585E5A] hover:text-[#191C1A]'
            }`}
          >
            3. Assessment ({progress.mistakesBank?.length || 0} Mistakes)
          </button>
        </div>
      </div>

      {/* KPI Overview Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#E8E4DC] p-5 rounded-xl space-y-1 shadow-xs">
          <span className="text-xs text-[#585E5A]">Enrolled Courses</span>
          <div className="font-mono text-2xl font-bold text-[#191C1A] tabular-nums">
            {courses.length}
          </div>
          <p className="text-[11px] text-[#8C928E] pt-1">
            Separately isolated courses
          </p>
        </div>

        <div className="bg-white border border-[#E8E4DC] p-5 rounded-xl space-y-1 shadow-xs">
          <span className="text-xs text-[#585E5A]">Reading Mastery</span>
          <div className="font-mono text-2xl font-bold text-[#1E3A2F] tabular-nums">
            {completedCount} <span className="text-xs font-normal text-[#585E5A]">/ {totalTopics}</span>
          </div>
          <div className="w-full h-1 bg-[#F0ECE4] rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-[#1E3A2F] rounded-full transition-all duration-300"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        <div className="bg-white border border-[#E8E4DC] p-5 rounded-xl space-y-1 shadow-xs">
          <span className="text-xs text-[#585E5A]">Revision Queue</span>
          <div className="font-mono text-2xl font-bold text-amber-700 tabular-nums">
            {revisionTopics.length}
          </div>
          <p className="text-[11px] text-[#8C928E] pt-1">
            Topics flagged for re-reading
          </p>
        </div>

        <div className="bg-white border border-[#E8E4DC] p-5 rounded-xl space-y-1 shadow-xs">
          <span className="text-xs text-[#585E5A]">Checkpoint Accuracy</span>
          <div className="font-mono text-2xl font-bold text-[#191C1A] tabular-nums">
            {totalQuizQuestionsAnswered > 0 ? `${quizAccuracy}%` : 'N/A'}
          </div>
          <p className="text-[11px] text-[#8C928E] pt-1">
            {progress.mistakesBank?.length || 0} flagged mistakes
          </p>
        </div>
      </div>

      {/* TAB 1: READING TRACKING */}
      {activeTab === 'reading' && (
        <div className="space-y-8">
          <section className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#191C1A]">
              Course Reading Breakdown
            </h3>

            {courses.length === 0 ? (
              <div className="bg-white border border-[#E8E4DC] p-8 rounded-xl text-center space-y-2">
                <BookOpen className="w-8 h-8 text-[#8C928E] mx-auto" />
                <p className="text-sm font-semibold text-[#191C1A]">No course progress to display</p>
                <p className="text-xs text-[#585E5A]">Add your first course to begin tracking reading continuity.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {courses.map((course) => {
                  let courseTopics = 0;
                  let courseCompleted = 0;
                  let totalUnits = 0;
                  let unitsStarted = 0;
                  let unitsCompleted = 0;
                  let unitsPassed = 0;
                  let unitsAwaitingAssessment = 0;
                  let firstTopic: { unitId: string; topicId: string } | null = null;

                  course.modules.forEach((mod) => {
                    mod.units.forEach((u) => {
                      totalUnits++;
                      let uTopics = 0;
                      let uCompleted = 0;

                      u.topics.forEach((t) => {
                        if (!firstTopic) firstTopic = { unitId: u.id, topicId: t.id };
                        courseTopics++;
                        uTopics++;
                        if (progress.completedTopicIds.includes(t.id)) {
                          courseCompleted++;
                          uCompleted++;
                        }
                      });

                      const status = progress.unitStatuses[u.id];
                      const evalList = progress.writtenEvaluations[u.id] || [];
                      const isPassed = evalList.some((e) => e.passed);

                      if (uCompleted > 0 || status === 'in_progress' || status === 'completed') {
                        unitsStarted++;
                      }
                      if (uCompleted === uTopics && uTopics > 0) {
                        unitsCompleted++;
                      }
                      if (isPassed) {
                        unitsPassed++;
                      } else if (uCompleted === uTopics && uTopics > 0) {
                        unitsAwaitingAssessment++;
                      }
                    });
                  });

                  const coursePct = courseTopics > 0 ? Math.round((courseCompleted / courseTopics) * 100) : 0;
                  const courseBookmarks = bookmarks.filter((b) => b.courseId === course.id);

                  return (
                    <div
                      key={course.id}
                      className="bg-white border border-[#E8E4DC] rounded-xl p-5 sm:p-6 space-y-4 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1 sm:max-w-md">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 rounded">
                              {course.code}
                            </span>
                            <span className="text-xs text-[#585E5A]">{totalUnits} Units in Textbook</span>
                            <span aria-hidden="true" className="text-[#8C928E]">·</span>
                            <span className="text-xs text-[#585E5A]">{courseTopics} Total Topics</span>
                          </div>
                          <h4 className="font-serif text-base font-bold text-[#191C1A]">
                            {course.title}
                          </h4>
                        </div>

                        {firstTopic && (
                          <button
                            onClick={() => onSelectTopic(course.id, firstTopic!.unitId, firstTopic!.topicId)}
                            className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors self-start sm:self-center shrink-0"
                          >
                            <span>Study Textbook</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Reading Progress Bar */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between text-[11px] text-[#585E5A]">
                          <span>Reading Progress: {courseCompleted} of {courseTopics} topics read</span>
                          <span className="font-mono font-medium text-[#1E3A2F]">{coursePct}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#F0ECE4] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#1E3A2F] rounded-full transition-all"
                            style={{ width: `${coursePct}%` }}
                          />
                        </div>
                      </div>

                      {/* Course Unit & Assessment Tracking Grid (Section 7 Requirements) */}
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2 border-t border-[#E8E4DC] text-xs">
                        <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E4DC]">
                          <span className="text-[10px] text-[#8C928E] block uppercase tracking-wider font-semibold">Total Units</span>
                          <span className="font-mono text-sm font-bold text-[#191C1A]">{totalUnits}</span>
                        </div>
                        <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E4DC]">
                          <span className="text-[10px] text-[#8C928E] block uppercase tracking-wider font-semibold">Units Started</span>
                          <span className="font-mono text-sm font-bold text-amber-700">{unitsStarted}</span>
                        </div>
                        <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E4DC]">
                          <span className="text-[10px] text-[#8C928E] block uppercase tracking-wider font-semibold">Units Completed</span>
                          <span className="font-mono text-sm font-bold text-[#1E3A2F]">{unitsCompleted}</span>
                        </div>
                        <div className="p-2.5 bg-[#F1F7F4] rounded-lg border border-[#CDE1D6]">
                          <span className="text-[10px] text-[#2E6247] block uppercase tracking-wider font-semibold">Units Passed (&ge; 7/10)</span>
                          <span className="font-mono text-sm font-bold text-[#1E3A2F]">{unitsPassed}</span>
                        </div>
                        <div className="p-2.5 bg-[#FDF6F5] rounded-lg border border-[#F3D5D0]">
                          <span className="text-[10px] text-red-800 block uppercase tracking-wider font-semibold">Awaiting Exam</span>
                          <span className="font-mono text-sm font-bold text-red-900">{unitsAwaitingAssessment}</span>
                        </div>
                      </div>

                      {/* Bookmarks and Notes Footer for Course */}
                      <div className="flex items-center gap-4 text-xs text-[#8C928E] pt-1">
                        <span>{courseBookmarks.length} Bookmarks in this course</span>
                        <span aria-hidden="true">·</span>
                        <span>{course.documents[0]?.name || 'Course Document'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Bookmarks Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                Saved Reading Bookmarks ({bookmarks.length})
              </h3>
            </div>

            {bookmarks.length === 0 ? (
              <div className="bg-white border border-[#E8E4DC] p-8 rounded-xl text-center space-y-2">
                <BookmarkIcon className="w-8 h-8 text-[#8C928E] mx-auto" />
                <p className="text-sm font-semibold text-[#191C1A]">No bookmarks saved yet</p>
                <p className="text-xs text-[#585E5A]">
                  Click the bookmark icon in the reading header to pin important paragraphs.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {bookmarks.map((bm) => (
                  <div
                    key={bm.id}
                    className="bg-white border border-[#E8E4DC] rounded-xl p-4 flex flex-col justify-between hover:border-[#1E3A2F]/40 transition-colors shadow-xs"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-[#585E5A]">
                        <span className="font-semibold text-[#1E3A2F]">{bm.courseTitle}</span>
                        <button
                          onClick={() => onRemoveBookmark(bm.id)}
                          className="text-[#8C928E] hover:text-red-600 transition-colors"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#191C1A] leading-snug">
                        {bm.topicTitle}
                      </h4>
                      <p className="text-[11px] text-[#8C928E] truncate">{bm.unitTitle}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#E8E4DC] flex items-center justify-between">
                      <span className="text-[10px] text-[#8C928E]">
                        {new Date(bm.savedAt).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => onSelectTopic(bm.courseId, bm.unitId, bm.topicId)}
                        className="text-xs font-semibold text-[#1E3A2F] hover:underline flex items-center gap-1"
                      >
                        <span>Resume</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {/* TAB 2: REVISION TRACKING */}
      {activeTab === 'revision' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                Topics Flagged for Revision ({revisionTopics.length})
              </h3>
              <p className="text-xs text-[#585E5A]">
                Topics you explicitly flagged during reading as needing re-examination before exams.
              </p>
            </div>
          </div>

          {revisionTopics.length === 0 ? (
            <div className="bg-white border border-[#E8E4DC] p-10 rounded-xl text-center space-y-2">
              <Flag className="w-8 h-8 text-[#8C928E] mx-auto" />
              <p className="text-sm font-semibold text-[#191C1A]">No topics flagged for revision</p>
              <p className="text-xs text-[#585E5A] max-w-sm mx-auto">
                While reading any unit topic, click the "Flag Revision" button in the reading sub-header to queue it here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {revisionTopics.map((item) => (
                <div
                  key={item.topicId}
                  className="bg-white border border-amber-200 rounded-xl p-5 space-y-3 shadow-xs hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 rounded">
                      {item.course.code}
                    </span>
                    <button
                      onClick={() => onToggleRevisionFlag(item.topicId)}
                      className="text-xs text-amber-800 hover:text-amber-950 font-medium flex items-center gap-1"
                      title="Unflag from revision"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Mark Revised</span>
                    </button>
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-bold text-[#191C1A]">
                      {item.topicTitle}
                    </h4>
                    <p className="text-xs text-[#8C928E] mt-0.5">{item.unitTitle}</p>
                  </div>

                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                    <span className="text-[11px] text-amber-900 font-medium">Pending Review</span>
                    <button
                      onClick={() => onSelectTopic(item.course.id, item.unitId, item.topicId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors"
                    >
                      <span>Open Revision</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: ASSESSMENT & MISTAKES BANK */}
      {activeTab === 'assessment' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                Mistakes Bank & Assessment Performance
              </h3>
              <p className="text-xs text-[#585E5A]">
                Review all missed checkpoint questions to target weaknesses and reinforce correct reasoning.
              </p>
            </div>
          </div>

          {/* Mistakes Ledger */}
          {(!progress.mistakesBank || progress.mistakesBank.length === 0) ? (
            <div className="bg-white border border-[#E8E4DC] p-10 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#2E6247] mx-auto" />
              <p className="text-sm font-semibold text-[#191C1A]">Clean Assessment Ledger</p>
              <p className="text-xs text-[#585E5A] max-w-sm mx-auto">
                No mistakes currently logged. Whenever you answer a checkpoint question incorrectly, it appears here for targeted review.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {progress.mistakesBank.map((mistake) => (
                <div
                  key={mistake.id}
                  className="bg-white border border-red-200 rounded-xl p-5 sm:p-6 space-y-3 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-red-900 bg-red-100 border border-red-200 px-2 py-0.5 rounded">
                        {mistake.courseCode}
                      </span>
                      <span className="text-[#585E5A]">{mistake.topicTitle}</span>
                    </div>

                    <button
                      onClick={() => onClearMistakeRecord(mistake.id)}
                      className="text-xs font-semibold text-[#2E6247] hover:underline flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Mark Resolved</span>
                    </button>
                  </div>

                  <p className="font-serif text-sm sm:text-base font-semibold text-[#191C1A] leading-relaxed">
                    {mistake.questionPrompt}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-900">
                      <span className="font-semibold block text-red-700 mb-0.5">Your Selected Answer:</span>
                      <span>{mistake.selectedOptionText}</span>
                    </div>

                    <div className="p-3 bg-[#F1F7F4] border border-[#CDE1D6] rounded-lg text-[#1E3A2F]">
                      <span className="font-semibold block text-[#2E6247] mb-0.5">Correct Answer:</span>
                      <span>{mistake.correctOptionText}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E4DC] rounded-lg text-xs text-[#585E5A] leading-relaxed">
                    <strong className="text-[#191C1A]">Grounded Explanation: </strong>
                    {mistake.explanation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
