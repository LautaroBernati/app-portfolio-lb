import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsPage } from '../skills-main/skills-main.page';

const routes: Routes = [
  {
    path: '', component: SkillsPage, title: 'Skills',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
