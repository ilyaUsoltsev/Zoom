import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule],
  exports: [MatSelectModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule {}
