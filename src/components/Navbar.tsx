import React, { useState } from 'react';
import { BookOpen, Plus, Menu, X, GraduationCap, Archive, FileText, BarChart3, Sparkles } from 'lucide-react';

export type NavView = 'home' | 'start-studying' | 'courses' | 'past-questions' | 'notes' | 'progress';

interface NavbarProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenAddCourse: () => void;
  onOpenAITutor?: () => void;
  coursesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenAddCourse,
  onOpenAITutor,
  coursesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'start-studying', label: 'Start Studying' },
    { id: 'courses', label: 'My Courses' },
    { id: 'past-questions', label: 'Past Questions' },
    { id: 'notes', label: 'My Notes' },
    { id: 'progress', label: 'My Progress' },
  ];

  const handleNavClick = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2F]"
        >
          <div className="w-9 h-9 rounded-lg bg-[#1E3A2F] text-white flex items-center justify-center transition-transform group-hover:scale-105">
            <GraduationCap className="w-5 h-5 text-[#E6EFE9]" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-[#191C1A] whitespace-nowrap shrink-0">
            StudyVault AI
          </span>
        </button>

        {/* Zone 2: 4-6 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-[#1E3A2F] font-semibold border-[#1E3A2F]'
                    : 'text-[#585E5A] border-transparent hover:text-[#191C1A]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {onOpenAITutor && (
            <button
              onClick={onOpenAITutor}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1E3A2F] bg-[#FAF8F5] border border-[#D8D2C6] hover:bg-[#F3EFEA] rounded-lg transition-colors shadow-2xs"
              title="Open StudyVault AI Tutor"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C88A36]" />
              <span className="hidden sm:inline">AI Tutor</span>
            </button>
          )}

          <button
            onClick={onOpenAddCourse}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg shadow-sm transition-all active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#1E3A2F]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Course Material</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#585E5A] hover:text-[#191C1A] rounded-md focus-visible:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E4DC] px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                  isActive
                    ? 'bg-[#1E3A2F]/10 text-[#1E3A2F] font-semibold'
                    : 'text-[#2D312E] hover:bg-[#F0ECE4]'
                }`}
              >
                <span>{link.label}</span>
                {link.id === 'courses' && coursesCount > 0 && (
                  <span className="text-xs text-[#585E5A] font-mono">{coursesCount}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
