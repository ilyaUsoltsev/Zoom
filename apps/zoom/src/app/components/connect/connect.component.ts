import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'zoom-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}
  token: string;
  userId: string;
  ngOnInit(): void {
    this.http
      .get('http://localhost:1337/auth/vk/callback', {
        params: {
          ...this.route.snapshot.queryParams
        }
      })
      .subscribe(res => {
        console.log(res);
        localStorage.setItem('token', (res as any).jwt);
        localStorage.setItem('user', JSON.stringify((res as any).user));
        this.authService.setUser((res as any).user);
      });
    this.router.navigateByUrl('');
  }
}
