import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }]
})
export class MaterialModule {}
