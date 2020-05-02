import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { LectureService } from '../../_services/lecture.service';
import { tap } from 'rxjs/operators';
import { Lecture } from '../../_services/lecture';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zoom-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {
  page = 0;
  lectures$: Observable<Lecture[]>;
  searchText: string;
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     this.page += 1;
  //     this.loadComments();
  //   }
  // }

  constructor(
    private lectureService: LectureService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(searchParam => {
      this.searchText = (searchParam as any).params.search;
    });
    this.lectures$ = this.lectureService.entities$.pipe(
      tap(() => {
        if (this.page === 0) {
          this.loadComments();
        }
      })
    );
  }

  loadComments() {
    if (this.searchText) {
      this.lectureService.getWithQuery({ _limit: '4', _q: this.searchText });
    } else {
      this.lectureService.getWithQuery({ _limit: '4' });
    }
  }
}
