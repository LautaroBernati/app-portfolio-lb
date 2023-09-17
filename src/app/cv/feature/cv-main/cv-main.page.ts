import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../data-access/experiences.service';
import { EducationService } from '../../data-access/education.service';
import { LaguangesService } from '../../data-access/languages.service';
import { fadeIn } from 'src/app/shared/utils/fade-in.animation';

@Component({
  selector: 'cv-main',
  templateUrl: 'cv-main.page.html',
  styleUrls: ['cv-main.page.scss'],
  animations: fadeIn(),
})
export class CVMainPage implements OnInit {
  public readonly experiences$;
  public readonly education$;
  public readonly languages$;

  constructor(
    private readonly experiencesService: ExperiencesService,
    private readonly educationService: EducationService,
    private readonly langService: LaguangesService,
  ) {
    this.experiences$ = this.experiencesService.experiences$;
    this.education$ = this.educationService.experiences$;
    this.languages$ = this.langService.langs$
  }

  ngOnInit() { }
}
