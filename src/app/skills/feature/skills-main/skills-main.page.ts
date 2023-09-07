import { Component, OnInit } from '@angular/core';
import { Skill, SkillsService, StrippedSkill } from '../../data-access/skills.service';
import { combineLatest, concatMap, firstValueFrom, map, tap } from 'rxjs';
import { IconDefinition, faAngular, faReact, faVuejs, faNodeJs, faNode } from '@fortawesome/free-brands-svg-icons';

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (result) {
        resolve(result as string);
      } else {
        reject(new Error('Failed to read blob.'));
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}

@Component({
  selector: 'app-skills',
  templateUrl: 'skills-main.page.html',
  styleUrls: ['skills-main.page.scss']
})
export class SkillsPage implements OnInit {
  public readonly skills$;

  constructor(
    private readonly skillsService: SkillsService,
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

    const nodeSkills$ = this.skillsService.strippedSkills$.pipe(map(SSs => SSs.find(ss => ss.UID === 'NOD')!), concatMap(async skill => await this.mapearImagenes(skill, faNode)));
    const nestSkills$ = this.skillsService.strippedSkills$.pipe(map(SSs => SSs.find(ss => ss.UID === 'NES')!), concatMap(async skill => await this.mapearImagenes(skill, faNodeJs)));

    const backEndSkills$ = combineLatest([
      nodeSkills$,
      nestSkills$,
    ]);

    this.skills$ = combineLatest([
      frontEndSkills$,
      backEndSkills$,
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
      modifiedExamples.push({ ...iterator, Img: a } as { Title?: string; Desc: string; Img: Blob; ImgUrl: string });
    }

    array.Examples = modifiedExamples;
    return <Skill>{ ...array, Icon: iconDef };
  }

  ngOnInit() { }
}
