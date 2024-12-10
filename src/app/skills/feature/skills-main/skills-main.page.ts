import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Skill, SkillsService, StrippedSkill } from '../../data-access/skills.service';
import { combineLatest, concatMap, firstValueFrom, map } from 'rxjs';
import { IconDefinition, faAngular, faReact, faVuejs, faNodeJs, faNode, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { ToolsService } from '../../data-access/tools.service';
import { MethodologiesService } from '../../data-access/methodologies.service';


@Component({
  selector: 'app-skills',
  templateUrl: 'skills-main.page.html',
  styleUrls: ['skills-main.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsPage implements OnInit {
  public readonly dependencies$;

  constructor(
    private readonly skillsService: SkillsService,
    private readonly toolsService: ToolsService,
    private readonly methodologiesService: MethodologiesService,
  ) {
    const angSkills$ = this.skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'ANG')!;
      }),
      map((angSkill) => {
        return this.mapearImagenes(angSkill, faAngular);
      }),
    );

    const reactSkills$ = this.skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'REA')!;
      }),
      map((skill) => {
        return this.mapearImagenes(skill, faReact);
      }),
    );

    const vueSkills$ = this.skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'VUE')!;
      }),
      map((skill) => {
        return this.mapearImagenes(skill, faVuejs);
      }),
    );

    const frontEndSkills$ = combineLatest([
      angSkills$,
      reactSkills$,
      vueSkills$,
    ]);

    const nodeSkills$ = this.skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NOD')!),
      map(skill => this.mapearImagenes(skill, faNode)),
    );
    const nestSkills$ = this.skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NES')!),
      map(skill => this.mapearImagenes(skill, faNodeJs)),
    );
    const netSkills$ = this.skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NET')!),
      map(skill => this.mapearImagenes(skill, faMicrosoft)),
    );

    const backEndSkills$ = combineLatest([
      nodeSkills$,
      nestSkills$,
      netSkills$,
    ]);

    this.dependencies$ = combineLatest([
      frontEndSkills$,
      backEndSkills$,
      this.toolsService.tools$,
      this.methodologiesService.methodologies$,
    ]);
  }

  private mapearImagenes(array: StrippedSkill, iconDef: IconDefinition) {
    return <Skill>{ ...array, Icon: iconDef };
  }

  ngOnInit() { }
}
