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
        style({ opacity: 0 }),
        animate('200ms',
          style({ opacity: 1 })
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })
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
