import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Lecture } from './lecture.model';
import * as LectureActions from './lecture.actions';

export const lecturesFeatureKey = 'lectures';

export interface State extends EntityState<Lecture> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Lecture> = createEntityAdapter<Lecture>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const lectureReducer = createReducer(
  initialState,
  on(LectureActions.addLecture,
    (state, action) => adapter.addOne(action.lecture, state)
  ),
  on(LectureActions.upsertLecture,
    (state, action) => adapter.upsertOne(action.lecture, state)
  ),
  on(LectureActions.addLectures,
    (state, action) => adapter.addMany(action.lectures, state)
  ),
  on(LectureActions.upsertLectures,
    (state, action) => adapter.upsertMany(action.lectures, state)
  ),
  on(LectureActions.updateLecture,
    (state, action) => adapter.updateOne(action.lecture, state)
  ),
  on(LectureActions.updateLectures,
    (state, action) => adapter.updateMany(action.lectures, state)
  ),
  on(LectureActions.deleteLecture,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(LectureActions.deleteLectures,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(LectureActions.loadLectures,
    (state, action) => adapter.setAll(action.lectures, state)
  ),
  on(LectureActions.clearLectures,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return lectureReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
