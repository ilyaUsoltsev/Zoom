import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Lecture } from './lecture.model';

export const loadLectures = createAction(
  '[Lecture/API] Load Lectures', 
  props<{ lectures: Lecture[] }>()
);

export const addLecture = createAction(
  '[Lecture/API] Add Lecture',
  props<{ lecture: Lecture }>()
);

export const upsertLecture = createAction(
  '[Lecture/API] Upsert Lecture',
  props<{ lecture: Lecture }>()
);

export const addLectures = createAction(
  '[Lecture/API] Add Lectures',
  props<{ lectures: Lecture[] }>()
);

export const upsertLectures = createAction(
  '[Lecture/API] Upsert Lectures',
  props<{ lectures: Lecture[] }>()
);

export const updateLecture = createAction(
  '[Lecture/API] Update Lecture',
  props<{ lecture: Update<Lecture> }>()
);

export const updateLectures = createAction(
  '[Lecture/API] Update Lectures',
  props<{ lectures: Update<Lecture>[] }>()
);

export const deleteLecture = createAction(
  '[Lecture/API] Delete Lecture',
  props<{ id: string }>()
);

export const deleteLectures = createAction(
  '[Lecture/API] Delete Lectures',
  props<{ ids: string[] }>()
);

export const clearLectures = createAction(
  '[Lecture/API] Clear Lectures'
);
