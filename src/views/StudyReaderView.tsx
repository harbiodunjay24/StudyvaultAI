import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Bookmark as BookmarkIcon,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Edit3,
  Save,
  Type,
  Clock,
  RotateCcw,
  Flag,
  FileText,
  Table as TableIcon,
  PenTool,
  HelpCircle,
  Quote,
  Check,
  ChevronDown,
  ChevronUp,
  Calculator
} from 'lucide-react';
import { Course, StudyUnit, StudyTopic, PersonalNote, WrittenEvaluationResult, UnitStatus, QuestionMistakeRecord } from '../types';
import { ExplainSimplyModal } from '../components/ExplainSimplyModal';
import { WrittenAssessmentCheckpoint } from '../components/WrittenAssessmentCheckpoint';
import { QuizCheckpoint } from '../components/QuizCheckpoint';
import { AITutorChat } from '../components/AITutorChat';

interface StudyReaderViewProps {
  course: Course;
  currentUnit: StudyUnit;
  currentTopic: StudyTopic;
  isBookmarked: boolean;
  isRevisionFlagged: boolean;
  notes: PersonalNote[];
  completedTopicIds: string[];
  unitStatus?: UnitStatus;
  onBackToCourse: () => void;
  onSelectTopic: (courseId: string, unitId: string, topicId: string) => void;
  onToggleBookmark: (course: Course, unit: StudyUnit, topic: StudyTopic) => void;
  onToggleRevisionFlag: (topicId: string) => void;
  onSaveNote: (note: Omit<PersonalNote, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onMarkTopicCompleted: (topicId: string) => void;
  onSetUnitStatus?: (unitId: string, status: UnitStatus) => void;
  onRecordWrittenEvaluation?: (topicId: string, evaluations: WrittenEvaluationResult[]) => void;
  onRecordQuizScore?: (topicId: string, score: number, total: number, newMistakes: QuestionMistakeRecord[]) => void;
}

export const StudyReaderView: React.FC<StudyReaderViewProps> = ({
  course,
  currentUnit,
  currentTopic,
  isBookmarked,
  isRevisionFlagged,
  notes,
  completedTopicIds,
  unitStatus = 'in_progress',
  onBackToCourse,
  onSelectTopic,
  onToggleBookmark,
  onToggleRevisionFlag,
  onSaveNote,
  onMarkTopicCompleted,
  onSetUnitStatus,
  onRecordWrittenEvaluation,
  onRecordQuizScore,
}) => {
  const [explainModalOpen, setExplainModalOpen] = useState(false);
  const [showInlineExplanation, setShowInlineExplanation] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notesPanelOpen, setNotesPanelOpen] = useState(false);
  const [aiTutorOpen, setAiTutorOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  // Quick note state
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteBody, setNewNoteBody] = useState('');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);

  const isCompleted = completedTopicIds.includes(currentTopic.id);
  const topicNotes = notes.filter((n) => n.courseId === course.id && n.topicId === currentTopic.id);

  // Compute next and previous topics across all modules/units of this course
  const allCourseTopics: { unit: StudyUnit; topic: StudyTopic }[] = [];
  course.modules.forEach((mod) => {
    mod.units.forEach((u) => {
      u.topics.forEach((t) => {
        allCourseTopics.push({ unit: u, topic: t });
      });
    });
  });

  const currentIndex = allCourseTopics.findIndex((item) => item.topic.id === currentTopic.id);
  const prevItem = currentIndex > 0 ? allCourseTopics[currentIndex - 1] : null;
  const nextItem = currentIndex < allCourseTopics.length - 1 ? allCourseTopics[currentIndex + 1] : null;

  const handleSaveQuickNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteBody.trim()) return;

    onSaveNote({
      courseId: course.id,
      courseCode: course.code,
      courseTitle: course.title,
      unitId: currentUnit.id,
      unitTitle: currentUnit.title,
      topicId: currentTopic.id,
      title: newNoteTitle.trim() || `Notes on ${currentTopic.title}`,
      content: newNoteBody.trim(),
      tags: [course.code],
    });

    setNewNoteTitle('');
    setNewNoteBody('');
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2500);
  };

  const handleExplainSimplySaveNote = (title: string, content: string) => {
    onSaveNote({
      courseId: course.id,
      courseCode: course.code,
      courseTitle: course.title,
      unitId: currentUnit.id,
      unitTitle: currentUnit.title,
      topicId: currentTopic.id,
      title,
      content,
      tags: [course.code, 'Explain Simply'],
    });
  };

  const handleContinueReading = () => {
    onMarkTopicCompleted(currentTopic.id);
    if (onSetUnitStatus) {
      onSetUnitStatus(currentUnit.id, 'completed');
    }
    if (nextItem) {
      onSelectTopic(course.id, nextItem.unit.id, nextItem.topic.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBackToCourse();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col animate-in fade-in">
      {/* Reader Utility Subheader */}
      <div className="sticky top-16 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E4DC] px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBackToCourse}
              className="p-1.5 text-[#585E5A] hover:text-[#191C1A] hover:bg-[#F0ECE4] rounded-lg transition-colors shrink-0"
              title="Return to syllabus outline"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-[#585E5A]">
                <span className="font-semibold text-[#191C1A]">{course.code}</span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{currentUnit.title}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Mark for revision flag */}
            <button
              onClick={() => onToggleRevisionFlag(currentTopic.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isRevisionFlagged
                  ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
                  : 'bg-white text-[#585E5A] border-[#D8D2C6] hover:text-[#191C1A]'
              }`}
              title={isRevisionFlagged ? 'Flagged for revision' : 'Flag this topic for revision'}
            >
              <Flag className={`w-3.5 h-3.5 ${isRevisionFlagged ? 'fill-current text-amber-700' : ''}`} />
              <span className="hidden sm:inline">
                {isRevisionFlagged ? 'Needs Revision' : 'Flag for Revision'}
              </span>
            </button>

            {/* Font size toggle */}
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
                fontSize === 'large'
                  ? 'bg-[#1E3A2F] text-white border-[#1E3A2F]'
                  : 'bg-white text-[#585E5A] border-[#D8D2C6] hover:text-[#191C1A]'
              }`}
              title="Toggle reading font size"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(course, currentUnit, currentTopic)}
              className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
                isBookmarked
                  ? 'bg-[#FAF2E6] text-[#C88A36] border-[#E8DEC9]'
                  : 'bg-white text-[#585E5A] border-[#D8D2C6] hover:text-[#191C1A]'
              }`}
              title={isBookmarked ? 'Topic is bookmarked' : 'Bookmark this topic'}
            >
              <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* AI Tutor Chatbot Trigger */}
            <button
              onClick={() => setAiTutorOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg shadow-2xs transition-colors"
              title="Open StudyVault AI Tutor"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F3EFEA]" />
              <span className="hidden sm:inline">AI Tutor</span>
            </button>

            {/* Notes drawer toggle */}
            <button
              onClick={() => setNotesPanelOpen(!notesPanelOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                notesPanelOpen
                  ? 'bg-[#1E3A2F] text-white border-[#1E3A2F]'
                  : 'bg-white text-[#1E3A2F] border-[#D8D2C6] hover:bg-[#F3EFEA]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Notes</span>
              {topicNotes.length > 0 && (
                <span className="font-mono text-[11px] ml-0.5">({topicNotes.length})</span>
              )}
            </button>

            {/* Syllabus outline toggle on desktop */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex p-2 bg-white text-[#585E5A] border border-[#D8D2C6] hover:text-[#191C1A] rounded-lg transition-colors"
              title="Toggle syllabus outline sidebar"
            >
              <BookOpen className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Reading Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8 relative">
        {/* Left: Collapsible Outline Sidebar */}
        {sidebarOpen && (
          <aside className="hidden lg:block w-72 shrink-0 space-y-6">
            <div className="sticky top-36 bg-white border border-[#E8E4DC] rounded-xl p-5 max-h-[calc(100vh-10rem)] overflow-y-auto space-y-4 shadow-xs">
              <div>
                <span className="text-[11px] font-semibold text-[#585E5A] uppercase tracking-wider block mb-1">
                  Textbook Syllabus
                </span>
                <h4 className="font-serif text-sm font-bold text-[#191C1A] truncate">
                  {course.title}
                </h4>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E8E4DC]">
                {course.modules.map((mod) => (
                  <div key={mod.id} className="space-y-2">
                    <p className="text-[11px] font-semibold text-[#8C928E] uppercase tracking-wider">
                      Module {mod.moduleNumber}
                    </p>
                    {mod.units.map((u) => (
                      <div key={u.id} className="space-y-1 pl-1">
                        <p className="text-xs font-semibold text-[#191C1A] line-clamp-1">
                          {u.title}
                        </p>
                        <div className="space-y-1 pl-2 border-l border-[#E8E4DC]">
                          {u.topics.map((t) => {
                            const isCurrent = t.id === currentTopic.id;
                            const isTopicDone = completedTopicIds.includes(t.id);
                            return (
                              <button
                                key={t.id}
                                onClick={() => onSelectTopic(course.id, u.id, t.id)}
                                className={`w-full text-left text-xs py-1 px-2 rounded transition-colors flex items-center justify-between gap-2 ${
                                  isCurrent
                                    ? 'bg-[#1E3A2F] text-white font-medium'
                                    : 'text-[#585E5A] hover:text-[#191C1A] hover:bg-[#F3EFEA]'
                                }`}
                              >
                                <span className="truncate">{t.title}</span>
                                {isTopicDone && (
                                  <CheckCircle2
                                    className={`w-3 h-3 shrink-0 ${isCurrent ? 'text-white' : 'text-[#2E6247]'}`}
                                  />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Center: Reading Canvas */}
        <main className="flex-1 min-w-0 max-w-3xl mx-auto space-y-8">
          {/* Topic Title & Actions Header */}
          <div className="space-y-4 pb-6 border-b border-[#E8E4DC]">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#585E5A]">
              <div className="flex items-center gap-2">
                <span>{currentUnit.title}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#1E3A2F]" />
                  ~{currentTopic.readingMinutes} min read
                </span>
                {currentTopic.sourceReference && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#8C928E]">Ref: {currentTopic.sourceReference}</span>
                  </>
                )}
              </div>

              {isCompleted ? (
                <span className="inline-flex items-center gap-1 text-[#2E6247] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Topic Completed</span>
                </span>
              ) : (
                <button
                  onClick={() => onMarkTopicCompleted(currentTopic.id)}
                  className="text-xs text-[#1E3A2F] font-semibold hover:underline"
                >
                  Mark as Read
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#191C1A] leading-tight">
                {currentTopic.title}
              </h1>

              {/* Explain Simply Button */}
              <button
                onClick={() => setExplainModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1E3A2F] bg-[#FAF2E6] border border-[#E8DEC9] hover:bg-[#F5ECD8] rounded-xl transition-all self-start sm:self-auto shrink-0 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
                <span>Explain Simply</span>
              </button>
            </div>
          </div>

          {/* Section A: Original Textbook Terminology & Definitions */}
          {currentTopic.textbookDefinitions && currentTopic.textbookDefinitions.length > 0 && (
            <div className="bg-white border border-[#E8E4DC] p-5 rounded-xl space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-[#C88A36]" />
                <span>Authoritative Textbook Definitions</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {currentTopic.textbookDefinitions.map((def, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF8F5] border border-[#E8E4DC] rounded-lg text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#191C1A]">{def.term}</span>
                      {def.sourceAuthor && (
                        <span className="text-[11px] text-[#8C928E] font-medium">({def.sourceAuthor})</span>
                      )}
                    </div>
                    <p className="text-[#383D3B] leading-relaxed italic">
                      "{def.definition}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section A: Original Textbook Content (Strictly Preserved) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#585E5A] uppercase tracking-wider pb-1">
              <span>Section A: Original Textbook Content</span>
              {currentTopic.sourceReference && <span>{currentTopic.sourceReference}</span>}
            </div>

            <article
              className={`prose max-w-none text-[#2D312E] leading-relaxed transition-all ${
                fontSize === 'large' ? 'text-lg sm:text-xl space-y-6' : 'text-base sm:text-lg space-y-5'
              }`}
            >
              {currentTopic.content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('-') || paragraph.startsWith('i)') || paragraph.startsWith('ii)')) {
                  return (
                    <div
                      key={pIdx}
                      className="bg-white border border-[#E8E4DC] p-5 rounded-xl whitespace-pre-line text-xs sm:text-sm leading-relaxed text-[#383D3B] my-4 shadow-xs"
                    >
                      {paragraph}
                    </div>
                  );
                }
                return (
                  <p key={pIdx} className="font-serif leading-[1.75] text-[#242825]">
                    {paragraph}
                  </p>
                );
              })}
            </article>
          </div>

          {/* Section B: Explain It Simply (Immediately underneath difficult concepts) */}
          {currentTopic.simplifiedExplanation && (
            <div className="bg-[#FAF2E6]/60 border border-[#E8DEC9] rounded-xl p-5 sm:p-6 space-y-3 mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E1E] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#C88A36]" />
                  <span>Section B: Explain It Simply (Textbook-Grounded)</span>
                </div>
                <button
                  onClick={() => setShowInlineExplanation(!showInlineExplanation)}
                  className="text-xs text-[#8C5E1E] hover:underline"
                >
                  {showInlineExplanation ? 'Hide' : 'Expand'}
                </button>
              </div>

              {showInlineExplanation && (
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#383D3B] leading-relaxed">
                  <div className="p-3 bg-white rounded-lg border border-[#E8DEC9]">
                    <strong className="text-[#191C1A] block mb-1">Real-World Analogy:</strong>
                    <p className="italic">"{currentTopic.simplifiedExplanation.analogy}"</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#E8DEC9]">
                    <strong className="text-[#191C1A] block mb-1">Plain English Summary:</strong>
                    <p>{currentTopic.simplifiedExplanation.plainEnglish}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 bg-white rounded-lg border border-[#E8DEC9]">
                      <strong className="text-[#1E3A2F] block mb-0.5">Core Takeaway:</strong>
                      <p>{currentTopic.simplifiedExplanation.keyTakeaway}</p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-[#E8DEC9]">
                      <strong className="text-[#9C6B28] block mb-0.5">Exam Strategy:</strong>
                      <p>{currentTopic.simplifiedExplanation.examTip}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Section C: Key Points to Remember */}
          {currentTopic.summaryPoints && currentTopic.summaryPoints.length > 0 && (
            <div className="bg-[#FAF8F5] border border-[#E8E4DC] p-6 rounded-xl space-y-3 mt-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#1E3A2F]" />
                <span>Section C: Key Points to Remember</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#383D3B] pl-4 list-disc">
                {currentTopic.summaryPoints.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section D: Tables and Comparisons */}
          {currentTopic.tables && currentTopic.tables.length > 0 && (
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider">
                <TableIcon className="w-4 h-4 text-[#1E3A2F]" />
                <span>Section D: Textbook Tables & Comparisons</span>
              </div>

              {currentTopic.tables.map((table, tIdx) => (
                <div key={tIdx} className="bg-white border border-[#E8E4DC] rounded-xl overflow-hidden shadow-xs">
                  <div className="bg-[#FAF8F5] px-4 py-3 border-b border-[#E8E4DC]">
                    <h4 className="font-serif text-sm font-bold text-[#191C1A]">
                      {table.title}
                    </h4>
                    {table.sourceCitation && (
                      <p className="text-[11px] text-[#8C928E] mt-0.5">Source: {table.sourceCitation}</p>
                    )}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#FAF8F5]/80 border-b border-[#E8E4DC] text-[#191C1A] font-semibold">
                        <tr>
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-2.5">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E4DC] text-[#383D3B]">
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#FAF8F5]/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-2.5 align-top leading-relaxed">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section E: Formulae and Step-by-Step Calculations */}
          {currentTopic.formulas && currentTopic.formulas.length > 0 && (
            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-[#1E3A2F]" />
                <span>Section E: Textbook Formulae & Step-by-Step Calculations</span>
              </div>

              {currentTopic.formulas.map((form) => (
                <div key={form.id} className="bg-white border border-[#E8E4DC] rounded-xl overflow-hidden shadow-xs space-y-4 p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E8E4DC]">
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#191C1A]">
                        {form.name}
                      </h4>
                      <p className="text-xs text-[#585E5A] mt-0.5">{form.contextAndPurpose}</p>
                    </div>
                    {form.sourceReference && (
                      <span className="font-mono text-[11px] text-[#8C928E] bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 rounded self-start sm:self-auto shrink-0">
                        {form.sourceReference}
                      </span>
                    )}
                  </div>

                  {/* Formula banner */}
                  <div className="p-4 bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl text-center">
                    <span className="text-[11px] font-semibold text-[#8C928E] uppercase tracking-wider block mb-1">
                      Authoritative Textbook Mathematical Model
                    </span>
                    <div className="font-mono text-base sm:text-xl font-bold text-[#1E3A2F] tracking-wide py-1">
                      {form.formulaDisplay}
                    </div>
                  </div>

                  {/* Variable breakdown table */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold text-[#191C1A]">
                      Variable Specification According to Textbook:
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border border-[#E8E4DC] rounded-lg">
                        <thead className="bg-[#FAF8F5] text-[#191C1A] border-b border-[#E8E4DC]">
                          <tr>
                            <th className="px-3 py-2 w-20">Symbol</th>
                            <th className="px-3 py-2 w-40">Variable Name</th>
                            <th className="px-3 py-2">Author's Definition & Calculation Role</th>
                            <th className="px-3 py-2 w-28">Scale/Unit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E8E4DC] text-[#383D3B]">
                          {form.variables.map((v, vIdx) => (
                            <tr key={vIdx} className="hover:bg-[#FAF8F5]/60">
                              <td className="px-3 py-2 font-mono font-bold text-[#1E3A2F]">{v.symbol}</td>
                              <td className="px-3 py-2 font-medium text-[#191C1A]">{v.name}</td>
                              <td className="px-3 py-2 leading-relaxed">{v.explanation}</td>
                              <td className="px-3 py-2 text-[#8C928E] font-mono text-[11px]">{v.unitOrScale || 'Scalar'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Worked calculations */}
                  {form.workedExamples && form.workedExamples.length > 0 && (
                    <div className="space-y-4 pt-3 border-t border-[#E8E4DC]">
                      <h5 className="text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider">
                        Step-by-Step Textbook Worked Example:
                      </h5>

                      {form.workedExamples.map((ex, exIdx) => (
                        <div key={exIdx} className="bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl p-4 sm:p-5 space-y-4">
                          <div>
                            <span className="font-serif text-sm font-bold text-[#191C1A] block">
                              {ex.title}
                            </span>
                            <p className="text-xs text-[#383D3B] mt-1 leading-relaxed italic">
                              "{ex.problemStatement}"
                            </p>
                          </div>

                          {/* Given parameters */}
                          <div className="bg-white p-3 rounded-lg border border-[#E8E4DC] text-xs">
                            <span className="font-semibold text-[#191C1A] block mb-1.5">
                              Given Values from Problem Statement:
                            </span>
                            <div className="flex flex-wrap gap-3">
                              {ex.givenValues.map((gv, gvIdx) => (
                                <div key={gvIdx} className="flex items-center gap-1.5 bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E8E4DC]">
                                  <span className="font-mono font-bold text-[#1E3A2F]">{gv.symbol}</span>
                                  <span className="text-[#8C928E]">({gv.label}):</span>
                                  <span className="font-semibold text-[#191C1A]">{gv.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Calculation Steps */}
                          <div className="space-y-2">
                            <span className="text-xs font-semibold text-[#191C1A] block">
                              Sequential Arithmetic Execution:
                            </span>
                            <div className="space-y-2">
                              {ex.steps.map((st) => (
                                <div key={st.stepNumber} className="bg-white p-3 rounded-lg border border-[#E8E4DC] text-xs space-y-1">
                                  <div className="flex items-center justify-between text-[#1E3A2F] font-semibold">
                                    <span>Step {st.stepNumber}: {st.description}</span>
                                    <span className="font-mono text-[11px] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8E4DC]">
                                      {st.mathExpression}
                                    </span>
                                  </div>
                                  <p className="text-[#585E5A] text-[11px] leading-relaxed">
                                    {st.explanation}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Final Result & Academic Interpretation */}
                          <div className="p-3 bg-white rounded-lg border-l-4 border-l-[#1E3A2F] border border-[#E8E4DC] space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#1E3A2F] uppercase tracking-wider">
                                Final Calculated Result:
                              </span>
                              <span className="font-mono font-bold text-sm text-[#1E3A2F] bg-[#FAF2E6] px-2.5 py-0.5 rounded border border-[#E8DEC9]">
                                {ex.finalResult}
                              </span>
                            </div>
                            <p className="text-xs text-[#383D3B] leading-relaxed pt-1">
                              <strong className="text-[#191C1A]">Textbook Interpretation: </strong>
                              {ex.authorInterpretation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Section F: Quick Comprehension Check & Examination Assessment */}
          <div className="space-y-4 mt-8 pt-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider">
              <Check className="w-4 h-4 text-[#1E3A2F]" />
              <span>Section F: Quick Comprehension Check & Examination Practice</span>
            </div>

            {/* Quick Checkpoint Multiple Choice Quiz with Option-Level Feedback */}
            {currentTopic.checkpointQuiz && currentTopic.checkpointQuiz.length > 0 && (
              <QuizCheckpoint
                questions={currentTopic.checkpointQuiz}
                topicTitle={currentTopic.title}
                courseCode={course.code}
                courseId={course.id}
                topicId={currentTopic.id}
                onQuizCompleted={(score, total, mistakes) => {
                  onMarkTopicCompleted(currentTopic.id);
                  onRecordQuizScore?.(currentTopic.id, score, total, mistakes);
                }}
                onContinueReading={handleContinueReading}
                hasNextTopic={Boolean(nextItem)}
              />
            )}

            {/* Tutor-Marked Assignment & Written Essay Practice */}
            {currentTopic.writtenQuestions && currentTopic.writtenQuestions.length > 0 && (
              <WrittenAssessmentCheckpoint
                questions={currentTopic.writtenQuestions}
                topicTitle={currentTopic.title}
                courseCode={course.code}
                courseId={course.id}
                topicId={currentTopic.id}
                unitId={currentUnit.id}
                onEvaluationCompleted={(evaluations) => {
                  onRecordWrittenEvaluation?.(currentTopic.id, evaluations);
                  onMarkTopicCompleted(currentTopic.id);
                }}
                onContinueToNextUnit={handleContinueReading}
                hasNextUnit={Boolean(nextItem)}
              />
            )}
          </div>

          {/* Bottom Navigation Row */}
          <div className="pt-8 border-t border-[#E8E4DC] flex items-center justify-between gap-4">
            {prevItem ? (
              <button
                onClick={() => {
                  onSelectTopic(course.id, prevItem.unit.id, prevItem.topic.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-xs font-semibold text-[#585E5A] hover:text-[#191C1A] transition-colors p-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left hidden sm:block">
                  <span className="text-[10px] text-[#8C928E] block">Previous</span>
                  <span className="truncate max-w-[180px] block">{prevItem.topic.title}</span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextItem ? (
              <button
                onClick={handleContinueReading}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg shadow-sm transition-all"
              >
                <div className="text-right">
                  <span className="text-[10px] opacity-80 block">Continue Reading</span>
                  <span className="truncate max-w-[180px] block">{nextItem.topic.title}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onMarkTopicCompleted(currentTopic.id);
                  if (onSetUnitStatus) onSetUnitStatus(currentUnit.id, 'completed');
                  onBackToCourse();
                }}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-all"
              >
                <span>Finish Unit Syllabus</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </main>

        {/* Right: Personal Study Notes Panel */}
        {notesPanelOpen && (
          <aside className="w-80 shrink-0 space-y-4">
            <div className="sticky top-36 bg-white border border-[#E8E4DC] rounded-xl p-5 max-h-[calc(100vh-10rem)] overflow-y-auto space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E4DC]">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-[#1E3A2F]" />
                  <h4 className="font-serif text-sm font-bold text-[#191C1A]">Personal Notes</h4>
                </div>
                <button
                  onClick={() => setNotesPanelOpen(false)}
                  className="p-1 text-[#8C928E] hover:text-[#191C1A] rounded"
                >
                  ✕
                </button>
              </div>

              {/* Note Creator */}
              <form onSubmit={handleSaveQuickNote} className="space-y-3">
                <input
                  type="text"
                  placeholder="Note title (optional)..."
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E3A2F]"
                />
                <textarea
                  rows={4}
                  placeholder="Jot down notes or reflections on this section..."
                  value={newNoteBody}
                  onChange={(e) => setNewNoteBody(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs bg-[#FAF8F5] border border-[#D8D2C6] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E3A2F] leading-relaxed"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-md transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Note to Course</span>
                </button>
                {noteSavedFeedback && (
                  <p className="text-[11px] text-[#2E6247] font-semibold text-center">
                    Note saved to your library!
                  </p>
                )}
              </form>

              {/* Existing Topic Notes */}
              <div className="space-y-3 pt-3 border-t border-[#E8E4DC]">
                <span className="text-[11px] font-semibold text-[#585E5A] uppercase tracking-wider block">
                  Saved Notes on this Topic ({topicNotes.length})
                </span>
                {topicNotes.length === 0 ? (
                  <p className="text-xs text-[#8C928E] italic">No notes for this topic yet.</p>
                ) : (
                  topicNotes.map((note) => (
                    <div key={note.id} className="bg-[#FAF8F5] border border-[#E8E4DC] p-3 rounded-lg space-y-1 text-xs">
                      <p className="font-semibold text-[#191C1A]">{note.title}</p>
                      <p className="text-[#383D3B] whitespace-pre-line leading-relaxed">{note.content}</p>
                      <p className="text-[10px] text-[#8C928E] pt-1">
                        {new Date(note.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Explain Simply Interactive Modal */}
      <ExplainSimplyModal
        isOpen={explainModalOpen}
        onClose={() => setExplainModalOpen(false)}
        topic={currentTopic}
        course={course}
        unit={currentUnit}
        onSaveAsNote={handleExplainSimplySaveNote}
      />

      {/* StudyVault AI Tutor Chatbot */}
      <AITutorChat
        course={course}
        activeUnit={currentUnit}
        activeTopic={currentTopic}
        isOpen={aiTutorOpen}
        onClose={() => setAiTutorOpen(false)}
        onSaveExplanationAsNote={handleExplainSimplySaveNote}
      />
    </div>
  );
};
