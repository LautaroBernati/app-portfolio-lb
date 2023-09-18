import { Component, Input } from '@angular/core';
import { Tool } from '../../data-access/tools.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { Methodology } from '../../data-access/methodologies.service';


@Component({
  selector: 'sk-tool-met-detail-ui',
  templateUrl: 'tool-met-detail.component.html',
  styleUrls: ['tool-met-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, MatProgressBarModule]
})
export class ToolMetDetailComponent {
  @Input('item') item: Tool | Methodology | null = null;

  getColor(progress: number) {
    const red = Math.min(255, Math.round((100 - progress) * 255 / 50)); // Red component
    const green = Math.min(200, Math.round((progress) * 200 / 50)); // Green component

    // Return the color as an RGB string
    return `rgb(${red}, ${green}, 0)`;
  }
}
