import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../data-access/skills.service';

@Component({
  selector: 'sk-tabs-ui',
  templateUrl: 'skills-tabs.component.html',
  styleUrls: ['skills-tabs.component.scss']
})
export class SkillsTabsComponent implements OnInit {
  @Input() public frontEndSkills: Skill[] = [];
  @Input() public backEndSkills: Skill[] = [];

  constructor() { }

  ngOnInit() { }
}
