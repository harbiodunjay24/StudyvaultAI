import React, { useState } from 'react';
import { Edit3, Plus, Trash2, Search, Filter, BookOpen, Download, Tag, Calendar } from 'lucide-react';
import { Course, PersonalNote } from '../types';

interface NotesViewProps {
  notes: PersonalNote[];
  courses: Course[];
  onSaveNote: (note: Omit<PersonalNote, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onUpdateNote: (id: string, title: string, content: string) => void;
  onDeleteNote: (id: string) => void;
  onOpenCourse: (courseId: string) => void;
}

export const NotesView: React.FC<NotesViewProps> = ({
  notes,
  courses,
  onSaveNote,
  onUpdateNote,
  onDeleteNote,
  onOpenCourse,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState('all');
  const [isCreating, setIsCreating] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  // New note form state
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id || '');

  // Edit form state
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const filteredNotes = notes.filter((n) => {
    if (courseFilter !== 'all' && n.courseId !== courseFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = n.title.toLowerCase().includes(q);
      const matchBody = n.content.toLowerCase().includes(q);
      const matchCourse = n.courseCode.toLowerCase().includes(q);
      if (!matchTitle && !matchBody && !matchCourse) return false;
    }
    return true;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const course = courses.find((c) => c.id === selectedCourseId) || courses[0];
    onSaveNote({
      courseId: course?.id || 'general',
      courseCode: course?.code || 'GEN',
      courseTitle: course?.title || 'General Notes',
      title: newTitle.trim(),
      content: newContent.trim(),
      tags: [course?.code || 'General'],
    });

    setNewTitle('');
    setNewContent('');
    setIsCreating(false);
  };

  const startEdit = (note: PersonalNote) => {
    setEditingNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNoteId) return;
    onUpdateNote(editingNoteId, editTitle, editContent);
    setEditingNoteId(null);
  };

  const exportAllNotes = () => {
    if (notes.length === 0) return;
    const markdown = notes
      .map(
        (n) =>
          `# ${n.title}\n**Course**: ${n.courseCode} - ${n.courseTitle}\n**Date**: ${new Date(
            n.updatedAt
          ).toLocaleDateString()}\n\n${n.content}\n\n---\n`
      )
      .join('\n');

    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `StudyVault_Notes_${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#585E5A] mb-1">
            <span>Knowledge Ledger</span>
            <span aria-hidden="true">·</span>
            <span>{notes.length} Personal Note{notes.length === 1 ? '' : 's'}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191C1A]">
            My Notes
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {notes.length > 0 && (
            <button
              onClick={exportAllNotes}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1E3A2F] bg-white border border-[#D8D2C6] hover:bg-[#FAF8F5] rounded-lg transition-colors"
              title="Download notes as Markdown file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Notes</span>
            </button>
          )}

          <button
            onClick={() => setIsCreating(true)}
            disabled={courses.length === 0}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] disabled:opacity-40 rounded-lg shadow-sm transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ New Note</span>
          </button>
        </div>
      </div>

      {/* New Note Form */}
      {isCreating && (
        <div className="bg-white border border-[#1E3A2F]/30 rounded-xl p-6 shadow-sm space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-base font-bold text-[#191C1A]">Create New Study Note</h3>
            <button onClick={() => setIsCreating(false)} className="text-xs text-[#8C928E] hover:text-[#191C1A]">
              Cancel
            </button>
          </div>

          <form onSubmit={handleCreateSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <input
                  type="text"
                  placeholder="Note title (e.g. Key Sampling Differences)..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-[#D8D2C6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3A2F]"
                  required
                />
              </div>
              <div>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-[#D8D2C6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3A2F]"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.code} - {c.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              rows={5}
              placeholder="Write your note, formulas, reflections, or exam reminders..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-[#D8D2C6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3A2F] leading-relaxed"
              required
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-3.5 py-1.5 text-xs text-[#585E5A] hover:bg-[#F0ECE4] rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#1E3A2F] hover:bg-[#152B22] rounded-lg shadow-sm"
              >
                Save Note
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-[#8C928E] absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search within notes by title, keyword, or course code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#D8D2C6] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3A2F]"
          />
        </div>

        {courses.length > 0 && (
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="text-xs sm:text-sm bg-white border border-[#D8D2C6] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3A2F]"
          >
            <option value="all">All Courses</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="bg-white border border-[#E8E4DC] rounded-xl p-12 text-center max-w-lg mx-auto space-y-3">
          <Edit3 className="w-10 h-10 text-[#8C928E] mx-auto" />
          <h3 className="font-serif text-lg font-bold text-[#191C1A]">No notes found</h3>
          <p className="text-xs text-[#585E5A] leading-relaxed">
            {notes.length === 0
              ? 'You have not written any notes yet. Notes can be added here or directly in the study reading view.'
              : 'No notes match your current search query or course filter.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotes.map((note) => {
            const isEditing = editingNoteId === note.id;

            if (isEditing) {
              return (
                <div key={note.id} className="bg-white border-2 border-[#1E3A2F] rounded-xl p-5 space-y-3 shadow-md">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full px-2.5 py-1 text-sm font-bold border border-[#D8D2C6] rounded"
                  />
                  <textarea
                    rows={6}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full p-2 text-xs border border-[#D8D2C6] rounded leading-relaxed"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setEditingNoteId(null)}
                      className="px-3 py-1 text-xs text-[#585E5A] hover:bg-slate-100 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEditSubmit}
                      className="px-3.5 py-1 text-xs font-semibold text-white bg-[#1E3A2F] rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={note.id}
                className="bg-white border border-[#E8E4DC] rounded-xl p-5 flex flex-col justify-between hover:border-[#1E3A2F]/40 transition-colors shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#585E5A]">
                    <button
                      onClick={() => onOpenCourse(note.courseId)}
                      className="font-mono font-semibold text-[#1E3A2F] hover:underline"
                    >
                      {note.courseCode}
                    </button>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#8C928E]">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#191C1A] leading-snug">
                    {note.title}
                  </h3>

                  {note.unitTitle && (
                    <p className="text-[11px] text-[#8C928E] truncate">
                      {note.unitTitle}
                    </p>
                  )}

                  <p className="text-xs text-[#383D3B] whitespace-pre-line leading-relaxed line-clamp-6">
                    {note.content}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[11px] text-[#585E5A]">
                    <Tag className="w-3 h-3" />
                    <span>{note.tags.join(', ') || 'General'}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => startEdit(note)}
                      className="text-xs text-[#1E3A2F] font-semibold hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Delete this note?')) {
                          onDeleteNote(note.id);
                        }
                      }}
                      className="text-[#8C928E] hover:text-red-600 transition-colors"
                      title="Delete note"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
