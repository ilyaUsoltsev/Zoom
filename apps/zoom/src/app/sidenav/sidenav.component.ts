import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zoom-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closeSidenav.emit();
  }
}
