import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Experience } from './experiences.service';

export type Education = Omit<Experience, 'Tech'>;

@Injectable()
export class EducationService {
  private readonly http = inject(HttpClient);
  private readonly fs = inject(Firestore);
  private readonly expColl = collection(this.fs, 'education');
  public readonly experiences$ = (collectionData(this.expColl, { idField: 'UID' }) as Observable<Education[]>).pipe(
    shareReplay()
  );
}
