import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zoom-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchField: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  startSearch() {
    this.searchField = this.searchField
      ? this.searchField.trim().toLowerCase()
      : '';
    this.router.navigateByUrl(`/lectures?search=${this.searchField}`);
  }
}
