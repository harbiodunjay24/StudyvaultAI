import React, { useState } from 'react';
import { X, Sparkles, Lightbulb, BookOpen, Check, Copy, BookmarkPlus, HelpCircle } from 'lucide-react';
import { StudyTopic, Course, StudyUnit } from '../types';

interface ExplainSimplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: StudyTopic;
  course: Course;
  unit: StudyUnit;
  onSaveAsNote: (title: string, content: string) => void;
}

export const ExplainSimplyModal: React.FC<ExplainSimplyModalProps> = ({
  isOpen,
  onClose,
  topic,
  course,
  unit,
  onSaveAsNote,
}) => {
  const [copied, setCopied] = useState(false);
  const [savedNote, setSavedNote] = useState(false);

  if (!isOpen) return null;

  const explanation = topic.simplifiedExplanation || {
    analogy: `Think of ${topic.title} as a systematic blueprint: you verify each component step-by-step so the whole structure stands firm.`,
    plainEnglish: `This section explains the core rules and applications of ${topic.title} without overwhelming technical jargon.`,
    keyTakeaway: 'Focus on understanding the central definitions and how they connect to practical problem solving.',
    examTip: 'Examiners look for clear explanations of terms and the ability to cite concrete examples.'
  };

  const handleCopy = () => {
    const fullText = `[EXPLAIN SIMPLY: ${topic.title}]\n\n` +
      `💡 The Analogy:\n${explanation.analogy}\n\n` +
      `📖 Plain English:\n${explanation.plainEnglish}\n\n` +
      `🎯 Key Takeaway:\n${explanation.keyTakeaway}\n\n` +
      `📝 Exam Tip:\n${explanation.examTip}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveToNotes = () => {
    const noteContent = `**Analogy**: ${explanation.analogy}\n\n` +
      `**Plain English**: ${explanation.plainEnglish}\n\n` +
      `**Key Takeaway**: ${explanation.keyTakeaway}\n\n` +
      `**Exam Tip**: ${explanation.examTip}`;

    onSaveAsNote(`Explain Simply: ${topic.title}`, noteContent);
    setSavedNote(true);
    setTimeout(() => setSavedNote(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF8F5] border border-[#E8E4DC] rounded-xl shadow-2xl max-w-xl w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E8E4DC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A2F] text-[#FAF8F5] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#C8E0D2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-[#585E5A] mb-0.5">
                <span>{course.code}</span>
                <span aria-hidden="true">·</span>
                <span>{unit.title}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#191C1A]">
                Explain Simply: {topic.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#585E5A] hover:text-[#191C1A] hover:bg-[#F0ECE4] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Cards */}
        <div className="mt-6 space-y-4 text-sm">
          {/* Everyday Analogy */}
          <div className="bg-[#F4F1EB] border border-[#E6E0D4] rounded-lg p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2F] mb-1.5 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-[#C88A36]" />
              <span>Real-World Analogy</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2D312E] leading-relaxed italic">
              "{explanation.analogy}"
            </p>
          </div>

          {/* Plain English */}
          <div className="bg-white border border-[#E8E4DC] rounded-lg p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#191C1A] mb-1.5 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#1E3A2F]" />
              <span>In Plain English</span>
            </div>
            <p className="text-xs sm:text-sm text-[#383D3B] leading-relaxed">
              {explanation.plainEnglish}
            </p>
          </div>

          {/* Core Takeaway & Exam Tip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border border-[#E8E4DC] rounded-lg p-3.5">
              <span className="block text-[11px] font-semibold text-[#1E3A2F] uppercase tracking-wider mb-1">
                Core Takeaway
              </span>
              <p className="text-xs text-[#383D3B] leading-relaxed">
                {explanation.keyTakeaway}
              </p>
            </div>
            <div className="bg-[#F8F6F0] border border-[#E8DEC9] rounded-lg p-3.5">
              <span className="block text-[11px] font-semibold text-[#9C6B28] uppercase tracking-wider mb-1">
                Exam Strategy Tip
              </span>
              <p className="text-xs text-[#4A4031] leading-relaxed">
                {explanation.examTip}
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#585E5A] hover:text-[#191C1A] hover:bg-[#F0ECE4] rounded-lg transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Explanation'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveToNotes}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#1E3A2F] bg-[#1E3A2F]/10 hover:bg-[#1E3A2F]/15 rounded-lg transition-colors"
            >
              {savedNote ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <BookmarkPlus className="w-3.5 h-3.5" />}
              <span>{savedNote ? 'Saved to My Notes' : 'Save to Notes'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
