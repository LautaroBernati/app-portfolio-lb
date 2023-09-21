import { NgModule } from '@angular/core';
import { ImageDetailDialog, TabDetailComponent } from './tab-detail.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BlobToStringPipe } from '../../utils/blob-string.pipe';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [TabDetailComponent, ImageDetailDialog],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    BlobToStringPipe,
    TranslateModule.forChild()
  ],
  exports: [TabDetailComponent],
  providers: [],
})
export class TabDetailModule { }
