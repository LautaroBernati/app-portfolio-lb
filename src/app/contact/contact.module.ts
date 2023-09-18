import { NgModule } from '@angular/core';
import { ContactMePage } from './contact.page';
import { ContactRoutingModule } from './contact-routing.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ContactMePage],
  imports: [
    ContactRoutingModule,
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [ContactMePage],
  providers: [],
})
export class ContactModule { }
