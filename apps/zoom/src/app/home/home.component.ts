import { Component, OnInit } from '@angular/core';
import { TIME_FOR_SEARCH } from '../_const/constants';

@Component({
  selector: 'zoom-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timeOptions: TIME_FOR_SEARCH[] = [
    TIME_FOR_SEARCH.NOW,
    TIME_FOR_SEARCH.TODAY,
    TIME_FOR_SEARCH.ANY
  ];
  searchField: string;
  selectedTime: string = TIME_FOR_SEARCH.ANY;
  constructor() {}

  ngOnInit(): void {}
}
