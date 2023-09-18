import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';


export declare type Methodology = {
  Desc: string;
  Percent: number;
};

@Injectable()
export class MethodologiesService {
  private readonly fs = inject(Firestore);
  private readonly methdsColl = collection(this.fs, 'methodologies');
  public readonly methodologies$ = (collectionData(this.methdsColl, { idField: 'UID' }) as Observable<Methodology[]>).pipe(
    shareReplay()
  );
}
