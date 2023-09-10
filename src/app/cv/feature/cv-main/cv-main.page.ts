import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../data-access/experiences.service';
import { EducationService } from '../../data-access/education.service';

@Component({
  selector: 'cv-main',
  templateUrl: 'cv-main.page.html',
  styleUrls: ['cv-main.page.scss']
})
export class CVMainPage implements OnInit {
  public readonly experiences$;
  public readonly education$;

  constructor(
    private readonly experiencesService: ExperiencesService,
    private readonly educationService: EducationService,
  ) {
    this.experiences$ = this.experiencesService.experiences$;
    this.education$ = this.educationService.experiences$;
  }

  ngOnInit() { }
}
