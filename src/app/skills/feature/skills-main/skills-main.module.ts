import { NgModule } from '@angular/core';
import { SkillsPage } from './skills-main.page';
import { SkillsTabModule } from '../../ui/skills-tabs/skills-tabs.module';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SkillsPage],
  imports: [
    CommonModule,
    SkillsTabModule,
    MatProgressSpinnerModule,
  ],
  exports: [SkillsPage],
  providers: [],
})
export class SkillsMainModule { }
