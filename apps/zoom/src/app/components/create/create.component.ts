import { Component, OnInit } from '@angular/core';
import { PLATFORMS } from '../../_const/constants';
import { LectureService } from '../../_services/lecture.service';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'zoom-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(
    private lectureService: LectureService,
    private authService: AuthService,
    private router: Router
  ) {}
  platforms = PLATFORMS;
  ngOnInit(): void {}

  createLecture(form) {
    const newLecture = {
      ...form.form.value,
      user: this.authService.getUserFromStorage()
    };
    this.lectureService.add(newLecture);
    form.reset();
    this.router.navigateByUrl('/lectures');
  }
}
