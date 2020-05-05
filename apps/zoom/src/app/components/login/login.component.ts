import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'zoom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}
  content: string;
  ngOnInit(): void {}
}
