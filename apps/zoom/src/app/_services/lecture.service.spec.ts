import { TestBed } from '@angular/core/testing';
import {
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { LectureService } from './lecture.service';

describe('LectureService', () => {
  let service: LectureService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        EntityCollectionServiceElementsFactory,
        LectureService
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(LectureService)
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
