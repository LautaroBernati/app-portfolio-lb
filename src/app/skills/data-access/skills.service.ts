import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';

type Example = {
  Title?: string;
  Img: Blob;
  Desc: string;
  Url?: string;
  ImgUrl: string;
};

export type Skill = {
  UID: string;
  Framework: string;
  Icon: IconDefinition;
  Info: string;
  Examples: Array<Example>;
};

type StrippedExample = Omit<Example, 'Img'>;
export type StrippedSkill = Omit<Skill, 'Icon' | 'Examples'> & { Examples: Array<StrippedExample> };

@Injectable()
export class SkillsService {
  constructor(
    private readonly http: HttpClient,
    private readonly firestore: Firestore,
  ) { }

  private readonly coll = collection(this.firestore, 'skills');

  public readonly strippedSkills$ = (collectionData(this.coll, { idField: 'UID' }) as Observable<StrippedSkill[]>);

  ObtenerImagen(ruta: string) {
    return this.http.get(ruta, { responseType: 'blob' });
  }
}
