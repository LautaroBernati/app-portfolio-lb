import { Component, OnInit } from '@angular/core';
import { Skill, SkillsService, StrippedSkill } from '../../data-access/skills.service';
import { combineLatest, concatMap, firstValueFrom, map } from 'rxjs';
import { IconDefinition, faAngular, faReact, faVuejs, faNodeJs, faNode, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { ToolsService } from '../../data-access/tools.service';
import { MethodologiesService } from '../../data-access/methodologies.service';


@Component({
  selector: 'app-skills',
  templateUrl: 'skills-main.page.html',
  styleUrls: ['skills-main.page.scss']
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
      concatMap(async (angSkill) => {
        return await this.mapearImagenes(angSkill, faAngular);
      }),
    );

    const reactSkills$ = this.skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'REA')!;
      }),
      concatMap(async (skill) => {
        return await this.mapearImagenes(skill, faReact);
      }),
    );

    const vueSkills$ = this.skillsService.strippedSkills$.pipe(
      map(strippedSkills => {
        return strippedSkills.find(ss => ss.UID === 'VUE')!;
      }),
      concatMap(async (skill) => {
        return await this.mapearImagenes(skill, faVuejs);
      }),
    );

    const frontEndSkills$ = combineLatest([
      angSkills$,
      reactSkills$,
      vueSkills$,
    ]);

    const nodeSkills$ = this.skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NOD')!),
      concatMap(async skill => await this.mapearImagenes(skill, faNode)),
    );
    const nestSkills$ = this.skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NES')!),
      concatMap(async skill => await this.mapearImagenes(skill, faNodeJs)),
    );
    const netSkills$ = this.skillsService.strippedSkills$.pipe(
      map(SSs => SSs.find(ss => ss.UID === 'NET')!),
      concatMap(async skill => await this.mapearImagenes(skill, faMicrosoft)),
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

  /**
   * Transforma las StrippedSkills a Skills, es decir, transforma las imagenes de blob a string (base64) y el icono.
   * @param array Lista de SSs.
   * @param iconDef Icono deseado para la StrippedSkill
   * @returns 
   */
  private async mapearImagenes(array: StrippedSkill, iconDef: IconDefinition) {
    const modifiedExamples = [];

    for (const iterator of array.Examples) {
      const a = /*await blobToBase64(*/await firstValueFrom(this.skillsService.ObtenerImagen(iterator.ImgUrl))/*)*/;
      modifiedExamples.push({ ...iterator, Img: a } as { Title: string; Desc: string; Img: Blob; ImgUrl: string; Type: string });
    }

    array.Examples = modifiedExamples;
    return <Skill>{ ...array, Icon: iconDef };
  }

  ngOnInit() { }
}
