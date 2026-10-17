import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Archive, FileText, CheckCircle2, Plus, Clock, Compass } from 'lucide-react';
import { Course, UserProgress } from '../types';
import { NavView } from '../components/Navbar';

interface HomeViewProps {
  courses: Course[];
  progress: UserProgress;
  onNavigate: (view: NavView) => void;
  onOpenAddCourse: () => void;
  onSelectCourseAndTopic: (courseId: string, unitId: string, topicId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  courses,
  progress,
  onNavigate,
  onOpenAddCourse,
  onSelectCourseAndTopic,
}) => {
  // Find last studied item if available
  const lastCourse = courses.find((c) => c.id === progress.lastActiveCourseId) || courses[0];
  let lastTopic: any = null;
  let lastUnit: any = null;

  if (lastCourse && lastCourse.modules.length > 0) {
    for (const mod of lastCourse.modules) {
      for (const u of mod.units) {
        const found = u.topics.find((t) => t.id === progress.lastActiveTopicId);
        if (found) {
          lastTopic = found;
          lastUnit = u;
          break;
        }
      }
      if (lastTopic) break;
    }
    // Fallback to first topic if last not found
    if (!lastTopic && lastCourse.modules[0]?.units[0]?.topics[0]) {
      lastUnit = lastCourse.modules[0].units[0];
      lastTopic = lastCourse.modules[0].units[0].topics[0];
    }
  }

  const handleStartStudying = () => {
    onNavigate('start-studying');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-8 sm:pb-12 border-b border-[#E8E4DC]">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A2F] bg-[#1E3A2F]/10 px-3.5 py-1.5 rounded-full">
            <Compass className="w-3.5 h-3.5" />
            <span>Focused, Distraction-Free Study Space</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191C1A] text-balance leading-[1.15]">
            Where academic materials become clarity and mastery.
          </h1>

          <p className="text-base sm:text-lg text-[#585E5A] max-w-2xl mx-auto leading-relaxed">
            Upload your course syllabus, lecture materials, and past exam questions one at a time. Read with generous typography, clarify tough concepts instantly, and retain knowledge through checkpoint testing.
          </p>

          {/* Prominent "Start Studying" CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleStartStudying}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#1E3A2F]"
            >
              <span>Start Studying</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenAddCourse}
              className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-[#1E3A2F] bg-white border border-[#D8D2C6] hover:bg-[#F5F2EB] rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Course</span>
            </button>
          </div>

          {/* Neutral unboxed metadata */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#8C928E]">
            <span>Supports PDF, DOCX, PPTX & TXT</span>
            <span aria-hidden="true">·</span>
            <span>Local Browser Privacy</span>
            <span aria-hidden="true">·</span>
            <span>Zero Slop Reading Mode</span>
          </div>
        </div>
      </section>

      {/* Resume studying banner if user already has an active course in progress */}
      {lastCourse && lastUnit && lastTopic && (
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl p-6 shadow-sm hover:border-[#1E3A2F]/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-[#585E5A]">
                  <Clock className="w-3.5 h-3.5 text-[#1E3A2F]" />
                  <span>Continue Where You Stopped</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#191C1A]">{lastCourse.code}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                  {lastTopic.title}
                </h3>
                <p className="text-xs text-[#585E5A]">
                  {lastUnit.title} · ~{lastTopic.readingMinutes} min read remaining
                </p>
              </div>

              <button
                onClick={() => onSelectCourseAndTopic(lastCourse.id, lastUnit.id, lastTopic.id)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>Resume Reading</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 4 Pillars of the Journey */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191C1A]">
            A purposeful architecture for academic retention
          </h2>
          <p className="text-xs sm:text-sm text-[#585E5A]">
            StudyVault AI avoids flashy dashboards in favor of genuine comprehension and long-term memory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#E8E4DC] p-6 rounded-xl space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#191C1A]">
              01. Focused Reading Canvas
            </h3>
            <p className="text-xs text-[#585E5A] leading-relaxed">
              Read cleanly without ads or sidebar distractions. Adjust typography, bookmark critical arguments, and track reading minutes.
            </p>
          </div>

          <div className="bg-white border border-[#E8E4DC] p-6 rounded-xl space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#C88A36]" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#191C1A]">
              02. Explain Simply
            </h3>
            <p className="text-xs text-[#585E5A] leading-relaxed">
              Stuck on dense academic jargon? Click Explain Simply to receive intuitive real-world analogies, 5-year-old summaries, and exam tips.
            </p>
          </div>

          <div className="bg-white border border-[#E8E4DC] p-6 rounded-xl space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#191C1A]">
              03. Checkpoint Mastery
            </h3>
            <p className="text-xs text-[#585E5A] leading-relaxed">
              Test comprehension right after reading each topic. Review immediate explanations for every option and retry until 100% confident.
            </p>
          </div>

          <div className="bg-white border border-[#E8E4DC] p-6 rounded-xl space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center">
              <Archive className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#191C1A]">
              04. Past Questions Vault
            </h3>
            <p className="text-xs text-[#585E5A] leading-relaxed">
              Upload past exams one file at a time, link questions directly to course topics, and run simulated test sessions with clear original vs AI tags.
            </p>
          </div>
        </div>
      </section>

      {/* Starting State Notice */}
      {courses.length === 0 && (
        <section className="max-w-2xl mx-auto px-4">
          <div className="bg-[#F4EFEA] border border-[#E8E4DC] p-6 sm:p-8 rounded-xl text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E4DC] text-[#1E3A2F] flex items-center justify-center mx-auto">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#191C1A]">
              Your Study Library is Clean and Empty
            </h3>
            <p className="text-xs text-[#585E5A] leading-relaxed max-w-md mx-auto">
              Per StudyVault AI's design, no mock courses or fake curricula are preloaded. Click "+ Add Course" to upload your personal lecture notes or syllabus document.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAddCourse}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Your First Course</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
