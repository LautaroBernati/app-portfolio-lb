import { NgModule } from '@angular/core';
import { CVMainPage } from './cv-main.page';
import { CommonModule } from '@angular/common';
import { CVItemsModule } from '../../ui/cv-items/cv-items.module';
import { ExperiencesService } from '../../data-access/experiences.service';
import { EducationService } from '../../data-access/education.service';
import { LaguangesService } from '../../data-access/languages.service';
import { LanguageItemComponent } from '../../ui/lang-item-ui/lang.component';


@NgModule({
  declarations: [
    CVMainPage
  ],
  imports: [
    CommonModule,
    CVItemsModule,
    LanguageItemComponent,
  ],
  exports: [CVMainPage],
  providers: [ExperiencesService, EducationService, LaguangesService],
})
export class CVMainModule { }
