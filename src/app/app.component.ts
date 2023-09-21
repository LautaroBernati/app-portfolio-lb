import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public readonly title = 'app-portfolio-lb';
  private readonly translate = inject(TranslateService);
  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
