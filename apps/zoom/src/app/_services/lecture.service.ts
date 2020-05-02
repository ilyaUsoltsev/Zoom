import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Lecture } from './lecture';

@Injectable({ providedIn: 'root' })
export class LectureService extends EntityCollectionServiceBase<Lecture> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Lecture', serviceElementsFactory);
  }
}
