import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { Observable } from 'rxjs';
import { LectureService } from '../../_services/lecture.service';

@Component({
  selector: 'zoom-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  user$: Observable<any>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.getUser();
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
  }
}
