import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';

export type Experience = {
  Title: string;
  Subtitle: string;
  Description: string;
  Tech?: string;
  From: number;
  To: number;
  LogoUrl?: string;
};

@Injectable()
export class ExperiencesService {
  private readonly http = inject(HttpClient);
  private readonly fs = inject(Firestore);
  private readonly expColl = collection(this.fs, 'experiences');
  private readonly query = query(this.expColl, orderBy('Order', 'asc'));
  public readonly experiences$ = (
    collectionData(this.query, { idField: 'UID' }) as Observable<Experience[]>)
      .pipe(
        shareReplay()
      );
}
