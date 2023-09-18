import { NgModule } from '@angular/core';
import { SkillsTabsComponent } from './skills-tabs.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TabDetailModule } from '../tab-detail/tab-detail.module';
import { ToolMetDetailComponent } from '../tool-met-detail/tool-met-detail.component';


@NgModule({
  declarations: [SkillsTabsComponent],
  imports: [
    CommonModule,
    TabDetailModule,
    MatTabsModule,
    MatIconModule,
    ToolMetDetailComponent,
  ],
  exports: [SkillsTabsComponent],
  providers: [],
})
export class SkillsTabModule { }
