import { Component, Input } from '@angular/core';
import { Language } from '../../data-access/languages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-lang-item-ui',
  templateUrl: 'lang.component.html',
  styleUrls: ['lang.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LanguageItemComponent {
  @Input('item') public item: Language | null = null;

}
