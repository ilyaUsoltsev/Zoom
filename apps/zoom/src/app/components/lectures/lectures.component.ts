import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LectureService } from '../../_services/lecture.service';
import { tap, map, distinctUntilChanged } from 'rxjs/operators';
import { Lecture } from '../../_services/lecture';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zoom-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {
  page = 0;
  pageCount = 0;
  searchText = '';
  itemsPerPage = 4;
  initialLoad = true;
  lectures$: Observable<Lecture[]>;

  constructor(
    private lectureService: LectureService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.queryParams.pipe(distinctUntilChanged()).subscribe(params => {
      this.lectureService.clearCache();
      this.searchText = params.search;
      this.pageCount = 0;
      this.page = 0;
      this.loadLectures();
    });
    this.lectures$ = this.lectureService.entities$.pipe(
      map(entities => {
        this.pageCount = entities.length;
        return entities;
      })
    );
  }
  getFirstBatch() {}
  nextPage() {
    this.page += 1;
    this.loadLectures();
  }
  loadLectures() {
    const queryObject = this.searchText ? { _q: this.searchText } : {};
    this.lectureService.getWithQuery({
      ...queryObject,
      _limit: '' + this.itemsPerPage,
      _start: (this.itemsPerPage * this.page).toString()
    });
  }

  goToLink(link: string) {
    window.open(link);
  }
}
