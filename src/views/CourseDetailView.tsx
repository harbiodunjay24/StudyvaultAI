import React, { useState } from 'react';
import {
  ArrowLeft,
  Plus,
  BookOpen,
  FileText,
  CheckCircle2,
  Clock,
  Upload,
  HelpCircle,
  Sparkles,
  ChevronRight,
  Bookmark,
  PenTool,
  Flag,
  Award,
  AlertCircle
} from 'lucide-react';
import { Course, UserProgress, PersonalNote, PastExamQuestionItem, UnitStatus } from '../types';
import { AITutorChat } from '../components/AITutorChat';

interface CourseDetailViewProps {
  course: Course;
  progress: UserProgress;
  notes: PersonalNote[];
  pastQuestions: PastExamQuestionItem[];
  onBack: () => void;
  onSelectTopic: (courseId: string, unitId: string, topicId: string) => void;
  onOpenAddDocument: () => void;
  onStartCoursePractice: (courseId: string) => void;
  onSetUnitStatus?: (unitId: string, status: UnitStatus) => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  course,
  progress,
  notes,
  pastQuestions,
  onBack,
  onSelectTopic,
  onOpenAddDocument,
  onStartCoursePractice,
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'assessments' | 'documents' | 'notes'>('syllabus');
  const [aiTutorOpen, setAiTutorOpen] = useState(false);

  // Filter notes and past questions strictly to this course
  const courseNotes = notes.filter((n) => n.courseId === course.id);
  const courseQuestions = pastQuestions.filter((q) => q.courseId === course.id);

  // Overall reading progress calculation
  let totalTopics = 0;
  let completedTopics = 0;
  course.modules.forEach((mod) => {
    mod.units.forEach((u) => {
      u.topics.forEach((t) => {
        totalTopics++;
        if (progress.completedTopicIds.includes(t.id)) {
          completedTopics++;
        }
      });
    });
  });
  const percentCompleted = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // Compute unit status helper
  const getUnitStatus = (unitId: string, unitTopics: { id: string }[]): UnitStatus => {
    if (progress.unitStatuses && progress.unitStatuses[unitId]) {
      return progress.unitStatuses[unitId];
    }
    const completedInUnit = unitTopics.filter((t) => progress.completedTopicIds.includes(t.id)).length;
    if (completedInUnit === 0) return 'not_started';
    if (completedInUnit === unitTopics.length) return 'completed';
    return 'in_progress';
  };

  // Find next uncompleted topic or first topic
  let targetUnit = course.modules[0]?.units[0];
  let targetTopic = course.modules[0]?.units[0]?.topics[0];
  for (const mod of course.modules) {
    for (const u of mod.units) {
      for (const t of u.topics) {
        if (!progress.completedTopicIds.includes(t.id)) {
          targetUnit = u;
          targetTopic = t;
          break;
        }
      }
      if (targetTopic && !progress.completedTopicIds.includes(targetTopic.id)) break;
    }
    if (targetTopic && !progress.completedTopicIds.includes(targetTopic.id)) break;
  }

  const statusLabels: Record<UnitStatus, { label: string; style: string }> = {
    locked: { label: 'Locked', style: 'text-[#8C928E] bg-[#FAF8F5] border-[#E8E4DC]' },
    not_started: { label: 'Not Started', style: 'text-[#8C928E] bg-[#FAF8F5] border-[#E8E4DC]' },
    in_progress: { label: 'In Progress', style: 'text-amber-800 bg-amber-50 border-amber-200' },
    assessment_required: { label: 'Assessment Required', style: 'text-blue-800 bg-blue-50 border-blue-200' },
    needs_practice: { label: 'Needs Practice', style: 'text-orange-800 bg-orange-50 border-orange-200' },
    passed: { label: 'Passed', style: 'text-[#1E3A2F] bg-[#EAF2ED] border-[#CDE1D6]' },
    completed: { label: 'Completed', style: 'text-[#1E3A2F] bg-[#EAF2ED] border-[#CDE1D6]' },
    needs_revision: { label: 'Needs Revision', style: 'text-red-800 bg-red-50 border-red-200' },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#585E5A] hover:text-[#191C1A] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>← Back to Course Selector</span>
      </button>

      {/* Course Hero Banner */}
      <div className="bg-white border border-[#E8E4DC] rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#585E5A]">
              <span className="font-mono font-bold text-[#1E3A2F] bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 rounded">
                {course.code}
              </span>
              {course.department && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{course.department}</span>
                </>
              )}
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#191C1A]">
              {course.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#585E5A] max-w-3xl leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:self-start shrink-0">
            {targetUnit && targetTopic && (
              <button
                onClick={() => onSelectTopic(course.id, targetUnit.id, targetTopic.id)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  {completedTopics > 0 ? `Resume: ${targetUnit.unitNumber || 'Unit'}` : 'Start Studying Unit 1'}
                </span>
              </button>
            )}

            <button
              onClick={onOpenAddDocument}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#D8D2C6] hover:bg-[#F3EFEA] rounded-lg transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>+ Append Document</span>
            </button>

            <button
              onClick={() => setAiTutorOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1E3A2F] bg-white border border-[#D8D2C6] hover:bg-[#FAF8F5] rounded-lg transition-colors shadow-2xs"
              title="Ask StudyVault AI Tutor about this course"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
              <span>Ask AI Tutor</span>
            </button>

            {courseQuestions.length > 0 && (
              <button
                onClick={() => onStartCoursePractice(course.id)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1E3A2F] bg-white border border-[#D8D2C6] hover:bg-[#FAF8F5] rounded-lg transition-colors shadow-xs"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#C88A36]" />
                <span>Past Questions ({courseQuestions.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="pt-4 border-t border-[#E8E4DC] grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
          <div className="sm:col-span-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#585E5A]">Reading Progress</span>
              <span className="font-mono font-medium text-[#1E3A2F]">
                {completedTopics} / {totalTopics} Topics Completed ({percentCompleted}%)
              </span>
            </div>
            <div className="w-full h-2 bg-[#F0ECE4] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1E3A2F] rounded-full transition-all duration-300"
                style={{ width: `${percentCompleted}%` }}
              />
            </div>
          </div>

          <div className="sm:text-right text-xs text-[#585E5A]">
            <span>{course.documents.length} Source Textbook{course.documents.length === 1 ? '' : 's'}</span>
          </div>
        </div>
      </div>

      {/* Segmented Tab Navigation */}
      <div className="flex items-center gap-1 p-1 bg-[#F0ECE4] rounded-lg self-start inline-flex">
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            activeTab === 'syllabus' ? 'bg-white text-[#191C1A] shadow-xs' : 'text-[#585E5A] hover:text-[#191C1A]'
          }`}
        >
          Study Units ({totalTopics})
        </button>
        <button
          onClick={() => setActiveTab('assessments')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            activeTab === 'assessments' ? 'bg-white text-[#191C1A] shadow-xs' : 'text-[#585E5A] hover:text-[#191C1A]'
          }`}
        >
          Written Exam Questions ({courseQuestions.length})
        </button>
        <button
          onClick={() => setActiveTab('documents')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            activeTab === 'documents' ? 'bg-white text-[#191C1A] shadow-xs' : 'text-[#585E5A] hover:text-[#191C1A]'
          }`}
        >
          Source Materials ({course.documents.length})
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            activeTab === 'notes' ? 'bg-white text-[#191C1A] shadow-xs' : 'text-[#585E5A] hover:text-[#191C1A]'
          }`}
        >
          Course Notes ({courseNotes.length})
        </button>
      </div>

      {/* Tab: Syllabus Outline */}
      {activeTab === 'syllabus' && (
        <div className="space-y-6">
          {course.modules.map((module, mIdx) => (
            <div key={module.id} className="bg-white border border-[#E8E4DC] rounded-xl overflow-hidden shadow-xs">
              <div className="bg-[#FAF8F5] px-6 py-4 border-b border-[#E8E4DC] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#585E5A] uppercase tracking-wider">
                    Module 0{module.moduleNumber || mIdx + 1}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                    {module.title}
                  </h3>
                </div>
                <span className="text-xs text-[#585E5A]">
                  {module.units.length} Unit{module.units.length === 1 ? '' : 's'}
                </span>
              </div>

              <div className="divide-y divide-[#E8E4DC]">
                {module.units.map((unit) => {
                  const unitStatus = getUnitStatus(unit.id, unit.topics);
                  const statusInfo = statusLabels[unitStatus];

                  return (
                    <div key={unit.id} className="p-6 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif text-base font-bold text-[#191C1A]">
                              {unit.title}
                            </h4>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${statusInfo.style}`}>
                              {statusInfo.label}
                            </span>
                          </div>
                          {unit.objectives && unit.objectives.length > 0 && (
                            <p className="text-xs text-[#585E5A] line-clamp-1">
                              Objectives: {unit.objectives.join(' · ')}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Topics inside this unit */}
                      <div className="grid grid-cols-1 gap-2.5 pt-1">
                        {unit.topics.map((topic) => {
                          const isDone = progress.completedTopicIds.includes(topic.id);
                          return (
                            <div
                              key={topic.id}
                              onClick={() => onSelectTopic(course.id, unit.id, topic.id)}
                              className="p-3.5 rounded-lg border border-[#E8E4DC] bg-[#FAF8F5] hover:bg-white hover:border-[#1E3A2F]/40 cursor-pointer transition-all flex items-center justify-between gap-4 group"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {isDone ? (
                                  <CheckCircle2 className="w-4 h-4 text-[#2E6247] shrink-0" />
                                ) : (
                                  <div className="w-4 h-4 rounded-full border border-[#D8D2C6] shrink-0" />
                                )}
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-[#191C1A] group-hover:text-[#1E3A2F] transition-colors truncate">
                                    {topic.title}
                                  </p>
                                  <div className="flex items-center gap-2 text-xs text-[#8C928E] mt-0.5">
                                    <span>~{topic.readingMinutes} min read</span>
                                    <span aria-hidden="true">·</span>
                                    <span>
                                      {topic.writtenQuestions?.length || 0} Written Exam Questions
                                    </span>
                                    {topic.tables && topic.tables.length > 0 && (
                                      <>
                                        <span aria-hidden="true">·</span>
                                        <span>{topic.tables.length} Textbook Table{topic.tables.length > 1 ? 's' : ''}</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className="text-xs font-semibold text-[#1E3A2F] opacity-0 group-hover:opacity-100 transition-opacity">
                                  Study Topic
                                </span>
                                <ChevronRight className="w-4 h-4 text-[#8C928E] group-hover:text-[#1E3A2F] group-hover:translate-x-0.5 transition-all" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Written Exam Questions */}
      {activeTab === 'assessments' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                Pen-on-Paper Examination Questions for {course.code}
              </h3>
              <p className="text-xs text-[#585E5A]">
                Derived strictly from the authoritative textbook. Write full answers for examiner rubric evaluation.
              </p>
            </div>
            {courseQuestions.length > 0 && (
              <button
                onClick={() => onStartCoursePractice(course.id)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors self-start sm:self-auto"
              >
                Launch Written Practice
              </button>
            )}
          </div>

          <div className="space-y-4">
            {courseQuestions.map((q, idx) => (
              <div key={q.id} className="bg-white border border-[#E8E4DC] p-5 rounded-xl space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs text-[#585E5A]">
                  <span className="font-semibold text-[#191C1A]">
                    Question {q.questionNumber || idx + 1}
                  </span>
                  <span className="text-[#1E3A2F] font-semibold bg-[#EAF2ED] px-2 py-0.5 rounded">
                    Official Exam Paper ({q.year})
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base font-bold text-[#191C1A] leading-relaxed">
                  {q.questionText}
                </p>
                {q.modelAnswer && (
                  <div className="text-xs text-[#585E5A] bg-[#FAF8F5] p-3 rounded-lg border border-[#E8E4DC] leading-relaxed">
                    <strong className="text-[#191C1A] block mb-1">Expected Marking Scheme:</strong>
                    {q.modelAnswer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Source Documents */}
      {activeTab === 'documents' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#585E5A]">
              Authoritative materials for <strong className="text-[#191C1A]">{course.code}</strong>. Content is strictly isolated.
            </p>
            <button
              onClick={onOpenAddDocument}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Append Another Document</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.documents.map((doc) => (
              <div key={doc.id} className="bg-white border border-[#E8E4DC] rounded-xl p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[#191C1A] truncate" title={doc.name}>
                      {doc.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-[#585E5A] mt-0.5">
                      <span className="uppercase font-mono">{doc.fileType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{(doc.fileSize / 1024).toFixed(1)} KB</span>
                      {doc.pageCount && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>~{doc.pageCount} Pages</span>
                        </>
                      )}
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                      doc.processingStatus === 'partially_processed' || doc.isPartiallyProcessed
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : doc.processingStatus === 'failed'
                        ? 'bg-red-100 text-red-800 border border-red-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {doc.processingStatus === 'partially_processed' || doc.isPartiallyProcessed
                      ? 'Partially processed'
                      : doc.processingStatus === 'failed'
                      ? 'Failed'
                      : 'Fully processed'}
                  </span>
                </div>

                {doc.summary && (
                  <p className="text-xs text-[#585E5A] leading-relaxed bg-[#FAF8F5] p-2.5 rounded-lg border border-[#E8E4DC]">
                    {doc.summary}
                  </p>
                )}

                {doc.processingNotes && (
                  <p className="text-xs text-[#2E6247] leading-relaxed bg-[#F1F7F4] p-2 rounded-lg border border-[#CDE1D6] text-[11px]">
                    <strong>Extraction Report:</strong> {doc.processingNotes}
                  </p>
                )}

                <div className="flex items-center justify-between text-[11px] text-[#8C928E] pt-2 border-t border-[#E8E4DC]">
                  <span>Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}</span>
                  <span className="text-[#2E6247] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Authoritative Source
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Notes */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          {courseNotes.length === 0 ? (
            <div className="bg-white border border-[#E8E4DC] p-8 rounded-xl text-center space-y-2">
              <Bookmark className="w-8 h-8 text-[#8C928E] mx-auto" />
              <p className="text-sm font-semibold text-[#191C1A]">No notes created for this course yet</p>
              <p className="text-xs text-[#585E5A]">
                Open any reading topic and write notes directly in the study margin.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseNotes.map((n) => (
                <div key={n.id} className="bg-white border border-[#E8E4DC] p-5 rounded-xl space-y-2">
                  <h4 className="text-sm font-bold text-[#191C1A]">{n.title}</h4>
                  {n.unitTitle && <p className="text-xs text-[#8C928E]">{n.unitTitle}</p>}
                  <p className="text-xs text-[#383D3B] whitespace-pre-line leading-relaxed">
                    {n.content}
                  </p>
                  <div className="pt-2 border-t border-[#E8E4DC] text-[11px] text-[#8C928E]">
                    {new Date(n.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* StudyVault AI Tutor Chatbot */}
      <AITutorChat
        course={course}
        isOpen={aiTutorOpen}
        onClose={() => setAiTutorOpen(false)}
      />
    </div>
  );
};
