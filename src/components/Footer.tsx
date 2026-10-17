import React from 'react';
import { GraduationCap, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { NavView } from './Navbar';

interface FooterProps {
  onNavigate: (view: NavView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-auto border-t border-[#E8E4DC] bg-[#F4EFEA]/80 text-[#585E5A] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#1E3A2F] text-white flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-[#E6EFE9]" />
              </div>
              <span className="font-serif text-lg font-bold text-[#191C1A]">StudyVault AI</span>
            </div>
            <p className="text-xs text-[#585E5A] leading-relaxed">
              An elegant, distraction-free study environment designed for deep reading, simple concept breakdowns, checkpoint mastery, and dedicated past exam archives.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#191C1A] uppercase tracking-wider mb-3">Study Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#191C1A] transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('start-studying')} className="hover:text-[#191C1A] transition-colors">
                  Start Studying
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-[#191C1A] transition-colors">
                  My Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('past-questions')} className="hover:text-[#191C1A] transition-colors">
                  Past Questions Vault
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#191C1A] uppercase tracking-wider mb-3">Tools & Progress</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('notes')} className="hover:text-[#191C1A] transition-colors">
                  Personal Study Notes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('progress')} className="hover:text-[#191C1A] transition-colors">
                  Comprehension Analytics
                </button>
              </li>
              <li className="text-[#8C928E]">Explain Simply Engine</li>
              <li className="text-[#8C928E]">Self-Paced Checkpoint Quizzes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#191C1A] uppercase tracking-wider mb-3">System Transparency</h4>
            <p className="text-xs text-[#585E5A] leading-relaxed mb-2">
              Privacy First: All documents, notes, progress, and questions are stored strictly in your browser session storage. No external database or server tracking connected.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#2E6247] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Isolated Local Client Storage Active</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C928E]">
          <p>© {new Date().getFullYear()} StudyVault AI. Built for intentional academic study.</p>
          <div className="flex items-center gap-4">
            <span>Focus & Discipline</span>
            <span aria-hidden="true">·</span>
            <span>Zero Clutter</span>
            <span aria-hidden="true">·</span>
            <span>Empirical Learning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
