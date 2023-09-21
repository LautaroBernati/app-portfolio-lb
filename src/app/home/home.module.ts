import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule.forChild(),
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }
