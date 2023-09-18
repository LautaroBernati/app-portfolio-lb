import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, shareReplay } from 'rxjs';


export declare type Tool = {
  Desc: string;
  Percent: number;
};

@Injectable()
export class ToolsService {
  private readonly fs = inject(Firestore);
  private readonly toolsColl = collection(this.fs, 'tools');
  public readonly tools$ = (collectionData(this.toolsColl, { idField: 'UID' }) as Observable<Tool[]>).pipe(
    shareReplay()
  );
}
