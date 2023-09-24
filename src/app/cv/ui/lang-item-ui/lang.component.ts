import { Component, Input } from '@angular/core';
import { Language } from '../../data-access/languages.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cv-lang-item-ui',
  templateUrl: 'lang.component.html',
  styleUrls: ['lang.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class LanguageItemComponent {
  @Input('item') public item: Language | null = null;
}
