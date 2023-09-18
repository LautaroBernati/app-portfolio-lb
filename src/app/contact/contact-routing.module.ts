import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMePage } from './contact.page';


const routes: Routes = [
  {
    path: '', component: ContactMePage, title: 'Contact Me'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
