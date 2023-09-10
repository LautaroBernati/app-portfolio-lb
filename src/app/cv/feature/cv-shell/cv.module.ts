import { NgModule } from '@angular/core';
import { CVMainModule } from '../cv-main/cv-main.module';
import { CVRoutingModule } from './cv-routing.module';


@NgModule({
  imports: [
    CVRoutingModule,
    CVMainModule,
  ],
  exports: [],
  providers: [],
})
export class CVModule { }
