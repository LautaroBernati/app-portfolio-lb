import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FontAwesomeModule,
    TranslateModule.forChild(),
  ],
  exports: [AboutPage],
  providers: [],
})
export class AboutModule { }
