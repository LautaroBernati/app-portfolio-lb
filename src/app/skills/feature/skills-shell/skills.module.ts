import { NgModule } from '@angular/core';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsMainModule } from '../skills-main/skills-main.module';
import { SkillsService } from '../../data-access/skills.service';
import { ToolsService } from '../../data-access/tools.service';
import { MethodologiesService } from '../../data-access/methodologies.service';


@NgModule({
  declarations: [],
  imports: [
    SkillsRoutingModule,
    SkillsMainModule,
  ],
  providers: [SkillsService, ToolsService, MethodologiesService]
})
export class SkillsModule { }
