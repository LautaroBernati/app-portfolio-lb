import { NgModule } from '@angular/core';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsMainModule } from '../skills-main/skills-main.module';
import { SkillsService } from '../../data-access/skills.service';

@NgModule({
  declarations: [],
  imports: [
    SkillsRoutingModule,
    SkillsMainModule,
  ],
  providers: [SkillsService]
})
export class SkillsModule { }
