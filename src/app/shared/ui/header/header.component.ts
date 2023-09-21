import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly darkMode = new FormControl(false, { nonNullable: true });
  public readonly moonIcon = faMoon;
  public readonly sunIcon = faSun;
  public readonly language = new FormControl('en', { nonNullable: true });
  private readonly translate = inject(TranslateService);

  constructor() {
    const document = inject(DOCUMENT);
    document.body.classList.add('mat-app-background');
    this.darkMode.valueChanges.subscribe(value => {
      if (value) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  switchLang(lang: string) {
    this.language.patchValue(lang);
    this.translate.use(lang);
  }
}
