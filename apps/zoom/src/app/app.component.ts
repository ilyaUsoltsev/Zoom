import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from './_services/auth/auth.service';

@Component({
  selector: 'zoom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    const user = this.getUser();
    if (user) {
      this.authService.setUser(user);
    }
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
