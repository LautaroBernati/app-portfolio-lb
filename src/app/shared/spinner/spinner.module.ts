import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate' }),
    TranslateModule.forChild(),
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
