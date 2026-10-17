import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Send,
  Sparkles,
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
  HelpCircle,
  Plus
} from 'lucide-react';
import { Course, StudyUnit, StudyTopic, AITutorMessage } from '../types';
import { askAITutor, INSUFFICIENT_INFORMATION_SENTENCE } from '../services/aiTutorService';

interface AITutorChatProps {
  course: Course;
  activeUnit?: StudyUnit | null;
  activeTopic?: StudyTopic | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveExplanationAsNote?: (title: string, content: string) => void;
}

export const AITutorChat: React.FC<AITutorChatProps> = ({
  course,
  activeUnit,
  activeTopic,
  isOpen,
  onClose,
  onSaveExplanationAsNote,
}) => {
  const [messages, setMessages] = useState<AITutorMessage[]>(() => [
    {
      id: 'init-msg',
      sender: 'tutor',
      text: `Hello! I am your **StudyVault AI Tutor** for **${course.code}: ${course.title}**.\n\nI am strictly grounded in your uploaded textbook. You can ask me to explain difficult sections in simpler English, clarify textbook definitions, compare concepts, or quiz you for your exams. If your textbook does not contain sufficient information on a topic, I will let you know immediately.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sourceReference: `${course.code} Textbook (${course.documents[0]?.name || 'Uploaded Document'})`,
      engineUsed: 'textbook_retrieval',
      courseCode: course.code,
      suggestedFollowUps: [
        'Explain this unit in simpler English',
        'What are the key terms in this section?',
        'Ask me a 10-mark examination question'
      ]
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // When active course changes, notify user that chatbot context has switched to that textbook
  const prevCourseIdRef = useRef(course.id);
  useEffect(() => {
    if (prevCourseIdRef.current !== course.id) {
      prevCourseIdRef.current = course.id;
      setMessages((prev) => [
        ...prev,
        {
          id: `switch-${Date.now()}`,
          sender: 'tutor',
          text: `Switched context to **${course.code}: ${course.title}**. All my answers are now retrieved exclusively from this textbook's ${course.documents[0]?.name || 'verified document'}.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sourceReference: `${course.code} Textbook`,
          courseCode: course.code,
          suggestedFollowUps: [
            `What are the core topics in ${course.code}?`,
            'Explain the first unit in simple terms',
            'Test my knowledge on this course'
          ]
        }
      ]);
    }
  }, [course.id, course.code, course.title, course.documents]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const userMsg: AITutorMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      courseCode: course.code,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await askAITutor(query, {
        course,
        activeUnit,
        activeTopic,
        conversationHistory: [...messages, userMsg],
      });

      const tutorMsg: AITutorMessage = {
        id: `tutor-${Date.now()}`,
        sender: 'tutor',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sourceReference: response.sourceReference,
        engineUsed: response.engineUsed,
        suggestedFollowUps: response.suggestedFollowUps,
        courseCode: course.code,
      };

      setMessages((prev) => [...prev, tutorMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `tutor-${Date.now()}`,
          sender: 'tutor',
          text: INSUFFICIENT_INFORMATION_SENTENCE,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sourceReference: `${course.code} Textbook`,
          courseCode: course.code,
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const quickPrompts = [
    'Explain this in simpler English',
    'What does this term mean in my textbook?',
    'Explain the difference between these concepts',
    'Ask me a 10-mark question from this unit',
    'Why is my answer incorrect?',
    'Explain this again in a simpler way'
  ];

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-200 flex flex-col bg-white border border-[#E8E4DC] shadow-2xl rounded-2xl overflow-hidden ${
        isExpanded
          ? 'inset-4 sm:inset-10'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[460px] h-[600px] max-h-[85vh]'
      }`}
    >
      {/* Header */}
      <div className="bg-[#1E3A2F] text-white p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#F3EFEA]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-serif font-bold text-sm leading-none">StudyVault AI Tutor</h3>
              <span className="text-[10px] bg-emerald-900/60 text-emerald-200 px-1.5 py-0.5 rounded border border-emerald-700/50">
                Textbook-Only
              </span>
            </div>
            <p className="text-[11px] text-[#D8D2C6] truncate max-w-[240px] mt-0.5">
              {course.code}: {course.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title={isExpanded ? 'Minimize' : 'Maximize'}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Close Tutor"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Strict Policy Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#E8E4DC] px-4 py-2 flex items-center justify-between text-[11px] text-[#585E5A]">
        <div className="flex items-center gap-1.5 truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1E3A2F] shrink-0" />
          <span className="truncate">
            Source: <strong className="text-[#191C1A]">{course.documents[0]?.name || `${course.code} Syllabus`}</strong>
          </span>
        </div>
        <span className="text-[10px] text-[#8C928E] shrink-0 ml-2">No Hallucinations</span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FBF9F5]/40 text-xs sm:text-sm">
        {messages.map((m) => {
          const isTutor = m.sender === 'tutor';
          const isInsufficient = m.text.includes(INSUFFICIENT_INFORMATION_SENTENCE);

          return (
            <div
              key={m.id}
              className={`flex flex-col ${isTutor ? 'items-start' : 'items-end'} space-y-1`}
            >
              <div
                className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed ${
                  isTutor
                    ? isInsufficient
                      ? 'bg-amber-50 border border-amber-200 text-amber-950 rounded-tl-xs'
                      : 'bg-white border border-[#E8E4DC] text-[#191C1A] rounded-tl-xs shadow-xs'
                    : 'bg-[#1E3A2F] text-white rounded-tr-xs'
                }`}
              >
                {/* Content */}
                <div className="whitespace-pre-line font-sans">{m.text}</div>

                {/* Source Citation & Actions for Tutor */}
                {isTutor && (
                  <div className="mt-3 pt-2 border-t border-[#E8E4DC] flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#8C928E]">
                    {m.sourceReference && (
                      <span className="font-mono text-[#1E3A2F] bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#E8E4DC] truncate max-w-[200px]">
                        Ref: {m.sourceReference}
                      </span>
                    )}

                    <div className="flex items-center gap-2 ml-auto">
                      {onSaveExplanationAsNote && (
                        <button
                          onClick={() =>
                            onSaveExplanationAsNote(
                              `Tutor Note: ${activeTopic?.title || course.code}`,
                              m.text
                            )
                          }
                          className="hover:text-[#1E3A2F] flex items-center gap-1 transition-colors"
                          title="Save as Study Note"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Save Note</span>
                        </button>
                      )}

                      <button
                        onClick={() => handleCopy(m.id, m.text)}
                        className="hover:text-[#1E3A2F] flex items-center gap-1 transition-colors"
                        title="Copy explanation"
                      >
                        {copiedId === m.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Follow-up suggestions */}
              {isTutor && m.suggestedFollowUps && m.suggestedFollowUps.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1 pl-1 max-w-[90%]">
                  {m.suggestedFollowUps.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="text-[11px] bg-white hover:bg-[#FAF8F5] border border-[#D8D2C6] text-[#1E3A2F] px-2.5 py-1 rounded-full text-left transition-colors truncate max-w-full"
                    >
                      💡 {prompt}
                    </button>
                  ))}
                </div>
              )}

              <span className="text-[10px] text-[#8C928E] px-1">{m.timestamp}</span>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#585E5A] bg-white border border-[#E8E4DC] p-3 rounded-2xl rounded-tl-xs max-w-[220px]">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-[#1E3A2F]" />
            <span>Consulting textbook passages...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Bar */}
      <div className="px-3 py-2 bg-[#FAF8F5] border-t border-[#E8E4DC] overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-thin">
        {quickPrompts.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSend(p)}
            className="text-[11px] bg-white hover:bg-[#F3EFEA] border border-[#D8D2C6] text-[#585E5A] hover:text-[#1E3A2F] px-2.5 py-1 rounded-md transition-colors shrink-0"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-[#E8E4DC] flex items-center gap-2 shrink-0"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`Ask about ${course.code} (e.g. "Explain this paragraph in simpler English")...`}
          className="flex-1 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D8D2C6] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#1E3A2F] focus:bg-white text-[#191C1A] placeholder-[#8C928E]"
          disabled={isTyping}
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2.5 bg-[#1E3A2F] hover:bg-[#152B22] disabled:opacity-40 text-white rounded-xl transition-all shrink-0"
          title="Send query"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
