import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Experience } from './experiences.service';

export type Education = Omit<Experience, 'Tech'>;

@Injectable()
export class EducationService {
  private readonly fs = inject(Firestore);
  private readonly expColl = collection(this.fs, 'education');
  private readonly query = query(this.expColl, orderBy('Order', 'asc'));
  public readonly experiences$ = (
    collectionData(this.query, { idField: 'UID' }) as Observable<Education[]>
  ).pipe(
    shareReplay({ bufferSize: 1, refCount: false }),
  );
}
