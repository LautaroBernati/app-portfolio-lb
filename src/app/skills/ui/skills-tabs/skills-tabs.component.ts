import { Component, Input } from '@angular/core';
import { Skill } from '../../data-access/skills.service';
import { trigger, style, transition, animate } from '@angular/animations';
import { Tool } from '../../data-access/tools.service';
import { Methodology } from '../../data-access/methodologies.service';


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
export class SkillsTabsComponent {
  @Input() public frontEndSkills: Skill[] = [];
  @Input() public backEndSkills: Skill[] = [];
  @Input() public tools: Tool[] = [];
  @Input() public methodologies: Methodology[] = [];
}
