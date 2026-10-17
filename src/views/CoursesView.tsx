import React, { useState, useMemo } from 'react';
import {
  Plus,
  BookOpen,
  FileText,
  ArrowRight,
  Clock,
  Trash2,
  Search,
  Upload,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
  Check,
  RotateCcw
} from 'lucide-react';
import { Course, UserProgress } from '../types';
import { getStoredConsolidationReport, triggerManualDeduplication } from '../services/storage';
import { ConsolidationReportItem } from '../services/courseDeduplication';

interface CoursesViewProps {
  courses: Course[];
  progress: UserProgress;
  onOpenAddCourse: () => void;
  onSelectCourse: (courseId: string) => void;
  onDeleteCourse: (courseId: string) => void;
  onSelectTopic: (courseId: string, unitId: string, topicId: string) => void;
  onLoadPresetCourse?: (presetType: 'fms' | 'ent' | 'ent304' | 'ent308' | 'csc') => void;
  onReloadCourses?: () => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  courses,
  progress,
  onOpenAddCourse,
  onSelectCourse,
  onDeleteCourse,
  onSelectTopic,
  onLoadPresetCourse,
  onReloadCourses,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeduplicationModal, setShowDeduplicationModal] = useState(false);
  const [consolidationReport, setConsolidationReport] = useState<ConsolidationReportItem[]>(getStoredConsolidationReport);
  const [isDeduplicating, setIsDeduplicating] = useState(false);
  const [dedupSuccessMsg, setDedupSuccessMsg] = useState<string | null>(null);

  const handleRunDeduplication = () => {
    setIsDeduplicating(true);
    setDedupSuccessMsg(null);
    setTimeout(() => {
      const report = triggerManualDeduplication();
      setConsolidationReport(report);
      setIsDeduplicating(false);
      if (onReloadCourses) {
        onReloadCourses();
      }
      setDedupSuccessMsg(
        report.length > 0
          ? `Consolidation complete: ${report.length} actions executed. All student progress & notes preserved.`
          : 'Audit complete: Zero duplicate courses or redundant documents found. All entries are canonical.'
      );
      setShowDeduplicationModal(true);
    }, 400);
  };

  // Filtered courses based on search query
  const filteredCourses = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.code.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        (c.department && c.department.toLowerCase().includes(q)) ||
        c.modules.some((m) =>
          m.title.toLowerCase().includes(q) ||
          m.units.some((u) =>
            u.title.toLowerCase().includes(q) ||
            u.topics.some((t) => t.title.toLowerCase().includes(q))
          )
        )
    );
  }, [courses, searchQuery]);

  // Determine recently studied courses (courses with progress or lastStudiedAt)
  const recentlyStudiedCourses = useMemo(() => {
    return courses
      .filter((c) => {
        // Has completed topics in this course or lastStudiedAt
        const hasTopicCompleted = c.modules.some((m) =>
          m.units.some((u) => u.topics.some((t) => progress.completedTopicIds.includes(t.id)))
        );
        return Boolean(c.lastStudiedAt || hasTopicCompleted);
      })
      .slice(0, 3);
  }, [courses, progress.completedTopicIds]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in">
      {/* Choose Your Course Header */}
      <div className="bg-white border border-[#E8E4DC] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E3A2F] bg-[#1E3A2F]/10 px-2.5 py-1 rounded-md">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Choose Your Course</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#191C1A]">
              Choose Your Course
            </h1>
            <p className="text-xs sm:text-sm text-[#585E5A]">
              Select a course to open its individual study dashboard, or add another course without mixing existing content.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleRunDeduplication}
              disabled={isDeduplicating}
              className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#D8D2C6] hover:bg-[#F3EFEA] rounded-xl transition-colors shadow-2xs"
              title="Inspect library, consolidate duplicate course entries, and retain canonical PDFs"
            >
              <ShieldCheck className="w-4 h-4 text-[#1E3A2F]" />
              <span>{isDeduplicating ? 'Checking...' : 'Check & Remove Duplicates'}</span>
            </button>

            <button
              onClick={onOpenAddCourse}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-xl shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Course Material</span>
            </button>

            <button
              onClick={onOpenAddCourse}
              className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#D8D2C6] hover:bg-[#F3EFEA] rounded-xl transition-colors"
            >
              <Upload className="w-4 h-4 text-[#1E3A2F]" />
              <span>Upload PDF</span>
            </button>
          </div>
        </div>

        {dedupSuccessMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-3 text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{dedupSuccessMsg}</span>
            </div>
            <button
              onClick={() => setShowDeduplicationModal(true)}
              className="font-semibold underline hover:no-underline text-emerald-800 shrink-0"
            >
              View Audit Log
            </button>
          </div>
        )}

        {/* Search Bar for Quick Filtering */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#8C928E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your courses by code (e.g. FMS 304, ENT 302), title, or unit topic..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl focus:outline-none focus:border-[#1E3A2F] focus:bg-white transition-all text-[#191C1A] placeholder-[#8C928E]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C928E] hover:text-[#191C1A]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {courses.length === 0 ? (
        <div className="bg-white border border-[#E8E4DC] rounded-2xl p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6 shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center mx-auto shadow-xs">
            <BookOpen className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#191C1A]">
              Your Course Vault is Empty
            </h3>
            <p className="text-xs sm:text-sm text-[#585E5A] leading-relaxed max-w-md mx-auto">
              Start by uploading your textbook or course syllabus. StudyVault AI organizes your material one course at a time without mixing contents.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenAddCourse}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-xl shadow-md transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Your First Course</span>
            </button>
          </div>

          {onLoadPresetCourse && (
            <div className="pt-6 border-t border-[#E8E4DC] space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C928E] block">
                Or explore directly with verified textbook materials:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <button
                  onClick={() => onLoadPresetCourse('ent308')}
                  className="px-3.5 py-1.5 bg-[#FAF8F5] hover:bg-[#F0ECE4] border border-[#D8D2C6] rounded-lg text-xs font-semibold text-[#1E3A2F] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
                  <span>Load ENT 308: Family Business & Succession Planning (Verified PDF)</span>
                </button>
                <button
                  onClick={() => onLoadPresetCourse('ent304')}
                  className="px-3.5 py-1.5 bg-[#FAF8F5] hover:bg-[#F0ECE4] border border-[#D8D2C6] rounded-lg text-xs font-semibold text-[#1E3A2F] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
                  <span>Load ENT 304: Leadership & Corporate Governance</span>
                </button>
                <button
                  onClick={() => onLoadPresetCourse('fms')}
                  className="px-3.5 py-1.5 bg-[#FAF8F5] hover:bg-[#F0ECE4] border border-[#D8D2C6] rounded-lg text-xs font-semibold text-[#1E3A2F] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
                  <span>Load FMS 304: Research Methodology (Noun Guide)</span>
                </button>
                <button
                  onClick={() => onLoadPresetCourse('ent')}
                  className="px-3.5 py-1.5 bg-[#FAF8F5] hover:bg-[#F0ECE4] border border-[#D8D2C6] rounded-lg text-xs font-semibold text-[#1E3A2F] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
                  <span>Load ENT 302: Feasibility & Business Planning</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Section: Recently Studied Courses (Shown without automatically selecting!) */}
          {recentlyStudiedCourses.length > 0 && !searchQuery && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#1E3A2F]" />
                <span>Recently Studied Courses</span>
                <span className="text-[#8C928E] font-normal normal-case ml-1">
                  (Click any course below to open its dashboard)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {recentlyStudiedCourses.map((course) => {
                  let totalTopics = 0;
                  let completedTopics = 0;
                  course.modules.forEach((mod) => {
                    mod.units.forEach((u) => {
                      u.topics.forEach((t) => {
                        totalTopics++;
                        if (progress.completedTopicIds.includes(t.id)) completedTopics++;
                      });
                    });
                  });
                  const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

                  return (
                    <div
                      key={course.id}
                      onClick={() => onSelectCourse(course.id)}
                      className="bg-white border-2 border-[#1E3A2F]/20 hover:border-[#1E3A2F] rounded-xl p-5 cursor-pointer transition-all hover:shadow-md group flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#1E3A2F] bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 rounded">
                            {course.code}
                          </span>
                          <span className="text-[11px] text-[#8C928E]">
                            {completedTopics} / {totalTopics} topics read
                          </span>
                        </div>

                        <div>
                          <h3 className="font-serif text-base font-bold text-[#191C1A] group-hover:text-[#1E3A2F] transition-colors line-clamp-1">
                            {course.title}
                          </h3>
                          <p className="text-xs text-[#585E5A] mt-1 line-clamp-2">
                            {course.description}
                          </p>
                        </div>

                        {/* Progress */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] text-[#585E5A]">
                            <span>Progress</span>
                            <span className="font-mono font-semibold text-[#1E3A2F]">{percent}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#F0ECE4] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#1E3A2F] rounded-full transition-all"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E8E4DC] flex items-center justify-between text-xs font-semibold text-[#1E3A2F]">
                        <span>Open Course Dashboard</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Section: All Courses in Vault */}
          <section className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#585E5A] pb-2 border-b border-[#E8E4DC]">
              <span className="font-semibold uppercase tracking-wider text-[#191C1A]">
                All Courses in Your Vault ({filteredCourses.length})
              </span>
              <span>Individual Course Isolation Enabled</span>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="p-8 text-center bg-white border border-[#E8E4DC] rounded-xl text-xs text-[#585E5A]">
                No courses found matching "{searchQuery}".
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
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
                  const percentCompleted =
                    totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

                  return (
                    <div
                      key={course.id}
                      className="bg-white border border-[#E8E4DC] rounded-xl p-6 flex flex-col justify-between hover:border-[#1E3A2F]/40 transition-all hover:shadow-xs group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="font-mono text-xs font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#E8E4DC] px-2.5 py-0.5 rounded">
                              {course.code}
                            </span>
                            {course.department && (
                              <p className="text-[11px] text-[#8C928E] mt-1.5 truncate max-w-[200px]">
                                {course.department}
                              </p>
                            )}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Remove course "${course.code}: ${course.title}" from your vault?`)) {
                                onDeleteCourse(course.id);
                              }
                            }}
                            className="text-[#8C928E] hover:text-red-600 p-1 rounded transition-colors"
                            title="Remove course"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div>
                          <h3
                            onClick={() => onSelectCourse(course.id)}
                            className="font-serif text-lg font-bold text-[#191C1A] hover:text-[#1E3A2F] cursor-pointer transition-colors leading-snug line-clamp-2"
                          >
                            {course.title}
                          </h3>
                          <p className="text-xs text-[#585E5A] mt-1 line-clamp-2 leading-relaxed">
                            {course.description}
                          </p>
                        </div>

                        {/* Unboxed metadata */}
                        <div className="flex items-center gap-2 text-xs text-[#585E5A] pt-1">
                          <span>{course.documents.length} Doc{course.documents.length === 1 ? '' : 's'}</span>
                          <span aria-hidden="true">·</span>
                          <span>{course.modules.length} Module{course.modules.length === 1 ? '' : 's'}</span>
                          <span aria-hidden="true">·</span>
                          <span>{totalTopics} Topic{totalTopics === 1 ? '' : 's'}</span>
                        </div>

                        {/* Document details & processing status badge */}
                        {course.documents.length > 0 && (
                          <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E4DC] text-xs space-y-1">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 font-medium text-[#191C1A] truncate">
                                <FileText className="w-3.5 h-3.5 text-[#1E3A2F] shrink-0" />
                                <span className="truncate">{course.documents[0].name}</span>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shrink-0 ${
                                  course.documents[0].processingStatus === 'partially_processed' || course.documents[0].isPartiallyProcessed
                                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                    : course.documents[0].processingStatus === 'failed'
                                    ? 'bg-red-100 text-red-800 border border-red-200'
                                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                }`}
                              >
                                {course.documents[0].processingStatus === 'partially_processed' || course.documents[0].isPartiallyProcessed
                                  ? 'Partially processed'
                                  : course.documents[0].processingStatus === 'failed'
                                  ? 'Failed'
                                  : 'Fully processed'}
                              </span>
                            </div>
                            {course.documents[0].processingNotes && (
                              <p className="text-[11px] text-[#585E5A] line-clamp-1 italic">
                                {course.documents[0].processingNotes}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Reading Progress */}
                        <div className="pt-2 space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#585E5A]">Reading Progress</span>
                            <span className="font-mono font-medium text-[#1E3A2F]">
                              {percentCompleted}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-[#F0ECE4] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#1E3A2F] rounded-full transition-all duration-300"
                              style={{ width: `${percentCompleted}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Card Action Button */}
                      <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectCourse(course.id)}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors shadow-xs"
                        >
                          <span>Open Study Dashboard</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}

      {/* Deduplication & Audit Modal */}
      {showDeduplicationModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] border border-[#E8E4DC] rounded-2xl shadow-xl max-w-xl w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                    Library Deduplication & Data Protection Audit
                  </h3>
                  <p className="text-xs text-[#585E5A]">
                    Safe consolidation record · All notes, bookmarks & scores protected
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDeduplicationModal(false)}
                className="p-1.5 text-[#585E5A] hover:text-[#191C1A] hover:bg-[#F0ECE4] rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1 text-xs">
              <div className="p-3 bg-white border border-[#E8E4DC] rounded-xl space-y-1">
                <span className="font-semibold text-[#191C1A] block">Deduplication Rules Enforced:</span>
                <ul className="list-disc pl-4 space-y-1 text-[#585E5A]">
                  <li>Duplicate courses consolidated into one canonical entry.</li>
                  <li>Redundant copies of the same PDF file removed; unique canonical copy retained.</li>
                  <li>Different courses & distinct document editions preserved without merging.</li>
                  <li>Student bookmarks, personal notes, quiz scores, and reading minutes migrated with 0 data loss.</li>
                </ul>
              </div>

              {consolidationReport.length === 0 ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-900 space-y-1">
                  <Check className="w-5 h-5 mx-auto text-emerald-700" />
                  <p className="font-semibold">Your Library Is Clean & Consolidated</p>
                  <p className="text-[11px] text-emerald-800">
                    No duplicate courses or redundant documents found. All {courses.length} courses are canonical.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="font-semibold text-[#191C1A] block">Consolidation History:</span>
                  {consolidationReport.map((item, idx) => (
                    <div key={idx} className="p-3 bg-white border border-[#E8E4DC] rounded-xl space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-[#1E3A2F]">{item.title}</span>
                        <span className="text-[#8C928E]">{new Date(item.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <p className="text-[#585E5A]">{item.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#E8E4DC] flex items-center justify-end">
              <button
                onClick={() => setShowDeduplicationModal(false)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors"
              >
                Close Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
