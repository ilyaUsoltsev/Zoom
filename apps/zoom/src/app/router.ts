import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LecturesComponent } from './components/lectures/lectures.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lectures/:search', component: LecturesComponent },
  { path: 'lectures', component: LecturesComponent }
];
