import React, { useState } from 'react';
import {
  Search,
  Plus,
  Upload,
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle2,
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';
import { Course, UserProgress } from '../types';

interface ChooseCourseViewProps {
  courses: Course[];
  progress: UserProgress;
  onSelectCourse: (courseId: string) => void;
  onOpenAddCourse: () => void;
  onLoadAuthoritativeENT302: () => void;
}

export const ChooseCourseView: React.FC<ChooseCourseViewProps> = ({
  courses,
  progress,
  onSelectCourse,
  onOpenAddCourse,
  onLoadAuthoritativeENT302,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses by search
  const filteredCourses = courses.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.code.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      (c.department && c.department.toLowerCase().includes(q))
    );
  });

  // Identify recently studied courses (without auto-selecting)
  const recentlyStudied = [...courses]
    .filter((c) => c.lastStudiedAt)
    .sort(
      (a, b) =>
        new Date(b.lastStudiedAt!).getTime() - new Date(a.lastStudiedAt!).getTime()
    )
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#585E5A] mb-1">
            <span>Academic Vault</span>
            <span aria-hidden="true">·</span>
            <span>Course Selector</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191C1A]">
            Choose Your Course
          </h2>
          <p className="text-xs text-[#585E5A] mt-1">
            Select a course to open its study dashboard, units, reading canvas, and written exam practice.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenAddCourse}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg shadow-sm transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add New Course</span>
          </button>
        </div>
      </div>

      {/* Quick Search & Actions Strip */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-[#8C928E] absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by course code, title, or department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#D8D2C6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3A2F]"
          />
        </div>

        <button
          onClick={onOpenAddCourse}
          className="flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#1E3A2F] bg-white border border-[#D8D2C6] hover:bg-[#F3EFEA] rounded-lg transition-colors whitespace-nowrap"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload Course Document</span>
        </button>
      </div>

      {/* If No Courses in Library */}
      {courses.length === 0 ? (
        <div className="bg-white border border-[#E8E4DC] rounded-xl p-10 text-center max-w-lg mx-auto space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#191C1A]">
              No Courses in Your Vault
            </h3>
            <p className="text-xs text-[#585E5A] leading-relaxed max-w-sm mx-auto mt-1">
              Add your course by uploading its syllabus or study material (PDF, DOCX, PPTX, TXT), or load your authoritative course guide.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenAddCourse}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Add New Course</span>
            </button>

            <button
              onClick={onLoadAuthoritativeENT302}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1E3A2F] bg-[#FAF2E6] border border-[#E8DEC9] hover:bg-[#F5ECD8] rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
              <span>Load ENT 302 NOUN Course Guide</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Recently Studied Section (Without auto-selection) */}
          {recentlyStudied.length > 0 && !searchQuery.trim() && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#585E5A]">
                <Clock className="w-3.5 h-3.5 text-[#1E3A2F]" />
                <span className="font-semibold text-[#191C1A]">Recently Studied Courses</span>
                <span className="text-[#8C928E]">(Click to enter dashboard)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentlyStudied.map((course) => (
                  <div
                    key={`recent-${course.id}`}
                    onClick={() => onSelectCourse(course.id)}
                    className="p-4 bg-[#F8F5EE] border border-[#E8DEC9] rounded-xl hover:border-[#1E3A2F]/50 cursor-pointer transition-all shadow-xs space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-semibold text-[#1E3A2F] bg-white border border-[#E8DEC9] px-2 py-0.5 rounded">
                        {course.code}
                      </span>
                      <span className="text-[11px] text-[#8C928E]">
                        Active recently
                      </span>
                    </div>

                    <h4 className="font-serif text-sm font-bold text-[#191C1A] group-hover:text-[#1E3A2F] transition-colors truncate">
                      {course.title}
                    </h4>

                    <div className="pt-2 border-t border-[#E8DEC9] flex items-center justify-between text-xs text-[#585E5A]">
                      <span>Open Course</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1E3A2F] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Enrolled Courses */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                All Enrolled Courses ({filteredCourses.length})
              </h3>
              <span className="text-xs text-[#585E5A]">
                Each course functions as an isolated study vault
              </span>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="bg-white border border-[#E8E4DC] p-8 rounded-xl text-center text-xs text-[#585E5A]">
                No courses match "{searchQuery}".
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCourses.map((course) => {
                  let totalTopics = 0;
                  let completedTopics = 0;

                  course.modules.forEach((m) => {
                    m.units.forEach((u) => {
                      u.topics.forEach((t) => {
                        totalTopics++;
                        if (progress.completedTopicIds.includes(t.id)) {
                          completedTopics++;
                        }
                      });
                    });
                  });

                  const pct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

                  return (
                    <div
                      key={course.id}
                      onClick={() => onSelectCourse(course.id)}
                      className="bg-white border border-[#E8E4DC] rounded-xl p-5 hover:border-[#1E3A2F]/40 cursor-pointer transition-all shadow-xs hover:shadow-sm flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 rounded">
                            {course.code}
                          </span>
                          <span className="text-xs text-[#585E5A]">
                            {course.modules.length} Mod · {course.modules.reduce((s, m) => s + m.units.length, 0)} Units
                          </span>
                        </div>

                        <div>
                          <h4 className="font-serif text-base font-bold text-[#191C1A] group-hover:text-[#1E3A2F] transition-colors leading-snug line-clamp-2">
                            {course.title}
                          </h4>
                          {course.department && (
                            <p className="text-[11px] text-[#8C928E] mt-0.5 truncate">
                              {course.department}
                            </p>
                          )}
                        </div>

                        <p className="text-xs text-[#585E5A] line-clamp-2 leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-[#E8E4DC]">
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] text-[#585E5A]">
                            <span>Progress</span>
                            <span className="font-mono font-medium text-[#1E3A2F]">{pct}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#F0ECE4] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#1E3A2F] rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-[#1E3A2F] font-semibold pt-1">
                          <span>Enter Study Dashboard</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
};
