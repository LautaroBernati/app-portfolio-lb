import { NgModule } from '@angular/core';
import { SkillsPage } from './skills-main.page';
import { SkillsTabModule } from '../../ui/skills-tabs/skills-tabs.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SkillsPage],
  imports: [
    CommonModule,
    SkillsTabModule,
  ],
  exports: [SkillsPage],
  providers: [],
})
export class SkillsMainModule { }
