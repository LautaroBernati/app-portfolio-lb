import { Component, inject } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public readonly title = 'app-portfolio-lb';
  private readonly translate = inject(TranslateService);
  private readonly spinner = inject(NgxSpinnerService);
  private readonly router = inject(Router);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en').subscribe({
      next: () => this.spinner.show(),
      error: () => console.error('Translation load failed'),
      complete: () => this.spinner.hide(),
    });

    this.router.events.pipe(
      filter(value => (value instanceof RouteConfigLoadStart || value instanceof RouteConfigLoadEnd)),
    ).subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        console.log('comienza');
        this.spinner.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        this.spinner.hide();
      }
    });
  }
}
