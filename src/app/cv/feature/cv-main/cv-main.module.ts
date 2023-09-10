import { NgModule } from '@angular/core';
import { CVMainPage } from './cv-main.page';
import { CommonModule } from '@angular/common';
import { CVItemsModule } from '../../ui/cv-items/cv-items.module';
import { ExperiencesService } from '../../data-access/experiences.service';
import { EducationService } from '../../data-access/education.service';


@NgModule({
  declarations: [
    CVMainPage
  ],
  imports: [
    CommonModule,
    CVItemsModule,
  ],
  exports: [CVMainPage],
  providers: [ExperiencesService, EducationService],
})
export class CVMainModule { }
