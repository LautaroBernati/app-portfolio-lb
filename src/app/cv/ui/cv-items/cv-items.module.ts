import { NgModule } from '@angular/core';
import { CVItemComponent } from './cv-items.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [CVItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule.forChild(),
  ],
  exports: [CVItemComponent],
  providers: [],
})
export class CVItemsModule { }
