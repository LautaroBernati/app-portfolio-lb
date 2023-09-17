import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';

export type Language = {
  Desc: string;
  Level: string;
  ImgUrl: string;
};

@Injectable()
export class LaguangesService {
  private readonly fs = inject(Firestore);
  private readonly expColl = collection(this.fs, 'languages');
  public readonly langs$ = (collectionData(this.expColl, { idField: 'UID' }) as Observable<Language[]>).pipe(
    shareReplay()
  );
}
