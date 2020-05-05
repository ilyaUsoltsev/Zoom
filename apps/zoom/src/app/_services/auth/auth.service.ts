import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  _userSub = new BehaviorSubject<any>(null);
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  setUser(user) {
    this._userSub.next(user);
  }

  getUser() {
    return this._userSub.asObservable();
  }

  getUserFromStorage() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
    this.setUser(null);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
