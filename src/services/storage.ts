import {
  Course,
  PastExamQuestionItem,
  PersonalNote,
  Bookmark,
  UserProgress,
  QuestionMistakeRecord,
  UnitStatus,
  WrittenEvaluationResult
} from '../types';
import {
  ENT302_AUTHENTIC_COURSE,
  AUTHENTIC_ENT302_PAST_QUESTIONS,
  FMS304_SAMPLE_COURSE,
  AUTHENTIC_FMS304_PAST_QUESTIONS,
  ENT304_AUTHENTIC_COURSE,
  ENT304_MODULES,
  ENT304_PAST_QUESTIONS,
  ENT308_AUTHENTIC_COURSE,
  ENT308_MODULES,
  ENT308_PAST_QUESTIONS,
  CSC202_SECOND_COURSE
} from './sampleData';
import { consolidateCourseLibrary, ConsolidationReportItem } from './courseDeduplication';

const CURRENT_VERSION = 'v8';
const STORAGE_KEYS = {
  COURSES: `studyvault_courses_${CURRENT_VERSION}`,
  PAST_QUESTIONS: `studyvault_past_questions_${CURRENT_VERSION}`,
  NOTES: `studyvault_notes_${CURRENT_VERSION}`,
  BOOKMARKS: `studyvault_bookmarks_${CURRENT_VERSION}`,
  PROGRESS: `studyvault_progress_${CURRENT_VERSION}`,
  CONSOLIDATION_LOG: `studyvault_consolidation_log_${CURRENT_VERSION}`,
};

const LEGACY_COURSE_KEYS = [
  'studyvault_courses_v8',
  'studyvault_courses_v7',
  'studyvault_courses_v6',
  'studyvault_courses_v5',
  'studyvault_courses_v4',
  'studyvault_courses_v3',
  'studyvault_courses_v2',
  'studyvault_courses_v1',
  'studyvault_courses',
];

const LEGACY_PQ_KEYS = [
  'studyvault_past_questions_v7',
  'studyvault_past_questions_v6',
  'studyvault_past_questions_v5',
  'studyvault_past_questions_v4',
  'studyvault_past_questions_v3',
  'studyvault_past_questions_v2',
  'studyvault_past_questions_v1',
  'studyvault_past_questions',
];

const LEGACY_NOTES_KEYS = [
  'studyvault_notes_v7',
  'studyvault_notes_v6',
  'studyvault_notes_v5',
  'studyvault_notes_v4',
  'studyvault_notes_v3',
  'studyvault_notes_v2',
  'studyvault_notes_v1',
  'studyvault_notes',
];

const LEGACY_BOOKMARKS_KEYS = [
  'studyvault_bookmarks_v7',
  'studyvault_bookmarks_v6',
  'studyvault_bookmarks_v5',
  'studyvault_bookmarks_v4',
  'studyvault_bookmarks_v3',
  'studyvault_bookmarks_v2',
  'studyvault_bookmarks_v1',
  'studyvault_bookmarks',
];

const LEGACY_PROGRESS_KEYS = [
  'studyvault_progress_v7',
  'studyvault_progress_v6',
  'studyvault_progress_v5',
  'studyvault_progress_v4',
  'studyvault_progress_v3',
  'studyvault_progress_v2',
  'studyvault_progress_v1',
  'studyvault_progress',
];

/**
 * Ensures a course with missing or truncated units is upgraded to the full verified sequence
 * without skipping any units (e.g. restores complete 14 units for ENT 304, 17 units for ENT 302, and 15 units for FMS 304).
 */
export function repairAndCompleteCourseUnits(course: Course): Course {
  const isEnt308 =
    /ENT[-_\s]?308/i.test(course.code) ||
    /Family[-_\s]?Business/i.test(course.title) ||
    /ENT[-_\s]?308/i.test(course.title) ||
    course.id.includes('ent308') ||
    (course.documents && course.documents.some((d) => /ENT[-_\s]?308|Family[-_\s]?Business|Succession/i.test(d.name)));

  const isEnt304 =
    /ENT[-_\s]?304/i.test(course.code) ||
    /Corporate[-_\s]?Governance|Leadership[-_\s]?and[-_\s]?Corporate/i.test(course.title) ||
    /ENT[-_\s]?304/i.test(course.title) ||
    course.id.includes('ent304') ||
    (course.documents && course.documents.some((d) => /ENT[-_\s]?304|Corporate[-_\s]?Governance|Leadership/i.test(d.name)));

  const isEnt302 =
    /ENT[-_\s]?302/i.test(course.code) ||
    /Feasibility/i.test(course.title) ||
    /ENT[-_\s]?302/i.test(course.title) ||
    course.id.includes('ent302') ||
    (course.documents && course.documents.some((d) => /ENT[-_\s]?302|Feasibility/i.test(d.name)));

  const isFms =
    /FMS[-_\s]?304|SMS[-_\s]?304/i.test(course.code) ||
    /Research[-_\s]?Methodology/i.test(course.title) ||
    /FMS[-_\s]?304|SMS[-_\s]?304/i.test(course.title) ||
    course.id.includes('fms304') ||
    (course.documents && course.documents.some((d) => /FMS[-_\s]?304|SMS[-_\s]?304|Research[-_\s]?Methodology/i.test(d.name)));

  if (isEnt308) {
    const existingUnitCount = course.modules.reduce((sum, m) => sum + m.units.length, 0);
    if (existingUnitCount < 4) {
      return {
        ...course,
        code: 'ENT 308',
        title: 'Family Business and Succession Planning',
        department: course.department || ENT308_AUTHENTIC_COURSE.department,
        description: ENT308_AUTHENTIC_COURSE.description,
        documents: course.documents && course.documents.length > 0 ? course.documents : ENT308_AUTHENTIC_COURSE.documents,
        modules: ENT308_MODULES,
      };
    }
  }

  if (isEnt304) {
    const existingUnitCount = course.modules.reduce((sum, m) => sum + m.units.length, 0);
    if (existingUnitCount < 14) {
      return {
        ...course,
        code: 'ENT 304',
        title: 'Leadership and Corporate Governance',
        department: course.department || ENT304_AUTHENTIC_COURSE.department,
        description: ENT304_AUTHENTIC_COURSE.description,
        documents: course.documents && course.documents.length > 0 ? course.documents : ENT304_AUTHENTIC_COURSE.documents,
        modules: ENT304_MODULES,
      };
    }
  }

  if (isEnt302) {
    const existingUnitCount = course.modules.reduce((sum, m) => sum + m.units.length, 0);
    if (existingUnitCount < 17) {
      return {
        ...course,
        code: 'ENT 302',
        title: 'Feasibility and Business Planning',
        department: course.department || ENT302_AUTHENTIC_COURSE.department,
        description: ENT302_AUTHENTIC_COURSE.description,
        documents: course.documents && course.documents.length > 0 ? course.documents : ENT302_AUTHENTIC_COURSE.documents,
        modules: ENT302_AUTHENTIC_COURSE.modules,
      };
    }
  }

  if (isFms) {
    const existingUnitCount = course.modules.reduce((sum, m) => sum + m.units.length, 0);
    if (existingUnitCount < 15) {
      return {
        ...course,
        code: 'FMS 304',
        title: 'Research Methodology',
        department: course.department || FMS304_SAMPLE_COURSE.department,
        description: FMS304_SAMPLE_COURSE.description,
        documents: course.documents && course.documents.length > 0 ? course.documents : FMS304_SAMPLE_COURSE.documents,
        modules: FMS304_SAMPLE_COURSE.modules,
      };
    }
  }

  return course;
}

/**
 * Returns courses; restores from any previous storage version, repairs truncated units,
 * consolidates duplicate course entries/documents while protecting student progress,
 * and ensures authentic courses are available if the store was empty.
 */
export function getStoredCourses(): Course[] {
  try {
    let loadedCourses: Course[] = [];

    // Attempt retrieval from current and all legacy keys
    for (const key of LEGACY_COURSE_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            loadedCourses = parsed;
            break;
          }
        } catch {
          // Continue searching other keys
        }
      }
    }

    // If courses were found in localStorage, repair any missing units and preserve user courses
    if (loadedCourses.length > 0) {
      const repaired = loadedCourses.map(repairAndCompleteCourseUnits);

      // Verify whether ENT 308, ENT 304, ENT 302, and FMS 304 are present; if any authentic material was missing,
      // include it so the student's study materials are fully restored
      const hasEnt308 = repaired.some(
        (c) => /ENT[-_\s]?308/i.test(c.code) || /Family[-_\s]?Business/i.test(c.title) || c.id.includes('ent308')
      );
      const hasEnt304 = repaired.some(
        (c) => /ENT[-_\s]?304/i.test(c.code) || /Corporate[-_\s]?Governance/i.test(c.title) || c.id.includes('ent304')
      );
      const hasEnt302 = repaired.some(
        (c) => /ENT[-_\s]?302/i.test(c.code) || /Feasibility/i.test(c.title) || c.id.includes('ent302')
      );
      const hasFms = repaired.some(
        (c) => /FMS[-_\s]?304|SMS[-_\s]?304/i.test(c.code) || /Research[-_\s]?Methodology/i.test(c.title) || c.id.includes('fms304')
      );

      let workingCourses = [...repaired];
      if (!hasEnt308) {
        workingCourses = [ENT308_AUTHENTIC_COURSE, ...workingCourses];
      }
      if (!hasEnt304) {
        workingCourses = [...workingCourses, ENT304_AUTHENTIC_COURSE];
      }
      if (!hasEnt302) {
        workingCourses = [...workingCourses, ENT302_AUTHENTIC_COURSE];
      }
      if (!hasFms) {
        workingCourses = [...workingCourses, FMS304_SAMPLE_COURSE];
      }

      // Execute library deduplication and consolidation while protecting student data
      const currentProgress = getStoredProgress();
      const currentBookmarks = getStoredBookmarks();
      const currentNotes = getStoredNotes();

      const consolidationRes = consolidateCourseLibrary(
        workingCourses,
        currentProgress,
        currentBookmarks,
        currentNotes
      );

      if (consolidationRes.totalDuplicatesRemoved > 0) {
        // Save migrated data
        saveStoredProgress(consolidationRes.progress);
        saveStoredBookmarks(consolidationRes.bookmarks);
        saveStoredNotes(consolidationRes.notes);
        saveStoredConsolidationReport(consolidationRes.report);
      }

      saveStoredCourses(consolidationRes.courses);
      return consolidationRes.courses;
    }

    // Default recovery state if completely empty: provide authentic textbooks
    // with complete sequence of units
    const initialCourses = [
      ENT308_AUTHENTIC_COURSE,
      ENT304_AUTHENTIC_COURSE,
      ENT302_AUTHENTIC_COURSE,
      FMS304_SAMPLE_COURSE
    ];
    saveStoredCourses(initialCourses);
    return initialCourses;
  } catch (e) {
    console.error('Failed to load courses from localStorage:', e);
    return [ENT308_AUTHENTIC_COURSE, ENT304_AUTHENTIC_COURSE, ENT302_AUTHENTIC_COURSE, FMS304_SAMPLE_COURSE];
  }
}

export function saveStoredCourses(courses: Course[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  } catch (e) {
    console.error('Failed to save courses to localStorage:', e);
  }
}

export function getStoredPastQuestions(): PastExamQuestionItem[] {
  try {
    for (const key of LEGACY_PQ_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const hasEnt308PQ = parsed.some((q: PastExamQuestionItem) => /ENT[-_\s]?308/i.test(q.courseCode));
            const hasEnt304PQ = parsed.some((q: PastExamQuestionItem) => /ENT[-_\s]?304/i.test(q.courseCode));
            const hasEnt302PQ = parsed.some((q: PastExamQuestionItem) => /ENT[-_\s]?302/i.test(q.courseCode));
            const hasFmsPQ = parsed.some((q: PastExamQuestionItem) => /FMS/i.test(q.courseCode));
            let finalPQ = [...parsed];
            if (!hasEnt308PQ) {
              finalPQ = [...ENT308_PAST_QUESTIONS, ...finalPQ];
            }
            if (!hasEnt304PQ) {
              finalPQ = [...ENT304_PAST_QUESTIONS, ...finalPQ];
            }
            if (!hasEnt302PQ) {
              finalPQ = [...finalPQ, ...AUTHENTIC_ENT302_PAST_QUESTIONS];
            }
            if (!hasFmsPQ) {
              finalPQ = [...finalPQ, ...AUTHENTIC_FMS304_PAST_QUESTIONS];
            }
            saveStoredPastQuestions(finalPQ);
            return finalPQ;
          }
        } catch {
          // Continue
        }
      }
    }

    // Default past questions from verified textbooks
    const defaultPQ = [
      ...ENT308_PAST_QUESTIONS,
      ...ENT304_PAST_QUESTIONS,
      ...AUTHENTIC_ENT302_PAST_QUESTIONS,
      ...AUTHENTIC_FMS304_PAST_QUESTIONS,
    ];
    saveStoredPastQuestions(defaultPQ);
    return defaultPQ;
  } catch (e) {
    console.error('Failed to load past questions from localStorage:', e);
    return [...ENT308_PAST_QUESTIONS, ...ENT304_PAST_QUESTIONS, ...AUTHENTIC_ENT302_PAST_QUESTIONS, ...AUTHENTIC_FMS304_PAST_QUESTIONS];
  }
}

export function saveStoredPastQuestions(questions: PastExamQuestionItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PAST_QUESTIONS, JSON.stringify(questions));
  } catch (e) {
    console.error('Failed to save past questions to localStorage:', e);
  }
}

export function getStoredNotes(): PersonalNote[] {
  try {
    for (const key of LEGACY_NOTES_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            saveStoredNotes(parsed);
            return parsed;
          }
        } catch {
          // Continue
        }
      }
    }
    return [];
  } catch (e) {
    console.error('Failed to load notes from localStorage:', e);
    return [];
  }
}

export function saveStoredNotes(notes: PersonalNote[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes to localStorage:', e);
  }
}

export function getStoredBookmarks(): Bookmark[] {
  try {
    for (const key of LEGACY_BOOKMARKS_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            saveStoredBookmarks(parsed);
            return parsed;
          }
        } catch {
          // Continue
        }
      }
    }
    return [];
  } catch (e) {
    console.error('Failed to load bookmarks from localStorage:', e);
    return [];
  }
}

export function saveStoredBookmarks(bookmarks: Bookmark[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  } catch (e) {
    console.error('Failed to save bookmarks to localStorage:', e);
  }
}

export function getStoredProgress(): UserProgress {
  try {
    for (const key of LEGACY_PROGRESS_KEYS) {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            const result: UserProgress = {
              completedTopicIds: parsed.completedTopicIds || [],
              unitStatuses: parsed.unitStatuses || {},
              readingMinutesByCourse: parsed.readingMinutesByCourse || {},
              totalMinutesStudied: parsed.totalMinutesStudied || 0,
              flaggedForRevisionTopicIds: parsed.flaggedForRevisionTopicIds || [],
              revisionCount: parsed.revisionCount || 0,
              quizScores: parsed.quizScores || {},
              writtenEvaluations: parsed.writtenEvaluations || {},
              mistakesBank: parsed.mistakesBank || [],
              lastActiveCourseId: parsed.lastActiveCourseId,
              lastActiveUnitId: parsed.lastActiveUnitId,
              lastActiveTopicId: parsed.lastActiveTopicId,
            };
            saveStoredProgress(result);
            return result;
          }
        } catch {
          // Continue
        }
      }
    }

    return {
      completedTopicIds: [],
      unitStatuses: {},
      readingMinutesByCourse: {},
      totalMinutesStudied: 0,
      flaggedForRevisionTopicIds: [],
      revisionCount: 0,
      quizScores: {},
      writtenEvaluations: {},
      mistakesBank: [],
    };
  } catch (e) {
    return {
      completedTopicIds: [],
      unitStatuses: {},
      readingMinutesByCourse: {},
      totalMinutesStudied: 0,
      flaggedForRevisionTopicIds: [],
      revisionCount: 0,
      quizScores: {},
      writtenEvaluations: {},
      mistakesBank: [],
    };
  }
}

export function saveStoredProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage:', e);
  }
}

// Loads the authoritative ENT 302 course (17 units complete)
export function loadSampleENT302(): { courses: Course[]; pastQuestions: PastExamQuestionItem[] } {
  const currentCourses = getStoredCourses();
  const exists = currentCourses.some((c) => c.code === 'ENT 302');
  let updatedCourses = currentCourses;
  if (!exists) {
    updatedCourses = [ENT302_AUTHENTIC_COURSE, ...currentCourses];
  } else {
    updatedCourses = currentCourses.map((c) => (c.code === 'ENT 302' ? ENT302_AUTHENTIC_COURSE : c));
  }
  saveStoredCourses(updatedCourses);

  const currentPQ = getStoredPastQuestions();
  const existingIds = new Set(currentPQ.map((q) => q.id));
  const newPQ = [...currentPQ, ...AUTHENTIC_ENT302_PAST_QUESTIONS.filter((q) => !existingIds.has(q.id))];
  saveStoredPastQuestions(newPQ);

  return { courses: updatedCourses, pastQuestions: newPQ };
}

// Loads the authoritative FMS 304 course (15 units complete)
export function loadSampleFMS304(): { courses: Course[]; pastQuestions: PastExamQuestionItem[] } {
  const currentCourses = getStoredCourses();
  const exists = currentCourses.some((c) => c.code === 'FMS 304');
  let updatedCourses = currentCourses;
  if (!exists) {
    updatedCourses = [FMS304_SAMPLE_COURSE, ...currentCourses];
  } else {
    updatedCourses = currentCourses.map((c) => (c.code === 'FMS 304' ? FMS304_SAMPLE_COURSE : c));
  }
  saveStoredCourses(updatedCourses);

  const currentPQ = getStoredPastQuestions();
  const existingIds = new Set(currentPQ.map((q) => q.id));
  const newPQ = [...currentPQ, ...AUTHENTIC_FMS304_PAST_QUESTIONS.filter((q) => !existingIds.has(q.id))];
  saveStoredPastQuestions(newPQ);

  return { courses: updatedCourses, pastQuestions: newPQ };
}

// Loads the authoritative ENT 304 course (14 units complete)
export function loadSampleENT304(): { courses: Course[]; pastQuestions: PastExamQuestionItem[] } {
  const currentCourses = getStoredCourses();
  const exists = currentCourses.some((c) => c.code === 'ENT 304');
  let updatedCourses = currentCourses;
  if (!exists) {
    updatedCourses = [ENT304_AUTHENTIC_COURSE, ...currentCourses];
  } else {
    updatedCourses = currentCourses.map((c) => (c.code === 'ENT 304' ? ENT304_AUTHENTIC_COURSE : c));
  }
  saveStoredCourses(updatedCourses);

  const currentPQ = getStoredPastQuestions();
  const existingIds = new Set(currentPQ.map((q) => q.id));
  const newPQ = [...currentPQ, ...ENT304_PAST_QUESTIONS.filter((q) => !existingIds.has(q.id))];
  saveStoredPastQuestions(newPQ);

  return { courses: updatedCourses, pastQuestions: newPQ };
}

// Loads the authoritative ENT 308 course (Family Business and Succession Planning)
export function loadSampleENT308(): { courses: Course[]; pastQuestions: PastExamQuestionItem[] } {
  const currentCourses = getStoredCourses();
  const exists = currentCourses.some((c) => c.code === 'ENT 308');
  let updatedCourses = currentCourses;
  if (!exists) {
    updatedCourses = [ENT308_AUTHENTIC_COURSE, ...currentCourses];
  } else {
    updatedCourses = currentCourses.map((c) => (c.code === 'ENT 308' ? ENT308_AUTHENTIC_COURSE : c));
  }
  saveStoredCourses(updatedCourses);

  const currentPQ = getStoredPastQuestions();
  const existingIds = new Set(currentPQ.map((q) => q.id));
  const newPQ = [...currentPQ, ...ENT308_PAST_QUESTIONS.filter((q) => !existingIds.has(q.id))];
  saveStoredPastQuestions(newPQ);

  return { courses: updatedCourses, pastQuestions: newPQ };
}

export function getStoredConsolidationReport(): ConsolidationReportItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONSOLIDATION_LOG);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load consolidation report:', e);
  }
  return [];
}

export function saveStoredConsolidationReport(report: ConsolidationReportItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.CONSOLIDATION_LOG, JSON.stringify(report));
  } catch (e) {
    console.error('Failed to save consolidation report:', e);
  }
}

/**
 * Explicit trigger for library deduplication and consolidation.
 */
export function triggerManualDeduplication(): ConsolidationReportItem[] {
  const currentCourses = getStoredCourses();
  const currentProgress = getStoredProgress();
  const currentBookmarks = getStoredBookmarks();
  const currentNotes = getStoredNotes();

  const res = consolidateCourseLibrary(
    currentCourses,
    currentProgress,
    currentBookmarks,
    currentNotes
  );

  saveStoredCourses(res.courses);
  saveStoredProgress(res.progress);
  saveStoredBookmarks(res.bookmarks);
  saveStoredNotes(res.notes);
  saveStoredConsolidationReport(res.report);

  return res.report;
}

// Loads the clean second course CSC 202 to test multi-course separation
export function loadSampleCSC202(): { courses: Course[] } {
  const currentCourses = getStoredCourses();
  const exists = currentCourses.some((c) => c.code === 'CSC 202');
  let updatedCourses = currentCourses;
  if (!exists) {
    updatedCourses = [...currentCourses, CSC202_SECOND_COURSE];
    saveStoredCourses(updatedCourses);
  }
  return { courses: updatedCourses };
}

export function clearLibraryData(): void {
  for (const k of [
    ...LEGACY_COURSE_KEYS,
    ...LEGACY_PQ_KEYS,
    ...LEGACY_NOTES_KEYS,
    ...LEGACY_BOOKMARKS_KEYS,
    ...LEGACY_PROGRESS_KEYS,
  ]) {
    localStorage.removeItem(k);
  }
}
