import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }
