import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {
  EntityDataModule,
  EntityDataService,
  DefaultDataServiceConfig
} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { defaultDataServiceConfig } from './_const/defaultDataServiceConfig';
import { appRoutes } from './router';
import { ConnectComponent } from './components/connect/connect.component';
import { AuthInterceptor } from './_interceptors/auth.interceptor';

export function tokenGetter() {
  return JSON.parse(localStorage.getItem('token'));
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    LecturesComponent,
    SidenavComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    JwtModule.forRoot({
      config: { tokenGetter }
    }),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(appRoutes),
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    EntityDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
