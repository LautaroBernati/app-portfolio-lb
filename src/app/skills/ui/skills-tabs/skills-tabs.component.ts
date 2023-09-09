import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../data-access/skills.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'sk-tabs-ui',
  templateUrl: 'skills-tabs.component.html',
  styleUrls: ['skills-tabs.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),           // initial styles
        animate('200ms',
          style({ opacity: 1 })          // final style after the transition has finished
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })          // we asume the initial style will be always opacity: 1
        )
      ])
    ])
  ],
})
export class SkillsTabsComponent implements OnInit {
  @Input() public frontEndSkills: Skill[] = [];
  @Input() public backEndSkills: Skill[] = [];

  constructor() { }

  ngOnInit() { }
}
