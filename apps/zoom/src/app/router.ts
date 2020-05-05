import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { LoginComponent } from './components/login/login.component';
import { ConnectComponent } from './components/connect/connect.component';
import { CreateComponent } from './components/create/create.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connect/vk', component: ConnectComponent },
  { path: 'lectures/:search', component: LecturesComponent },
  { path: 'lectures', component: LecturesComponent },
  { path: 'create', component: CreateComponent },
  { path: 'login', component: LoginComponent }
];
