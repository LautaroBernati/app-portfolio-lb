import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public readonly title = 'app-portfolio-lb';
  private isDarkMode = true;

  constructor(private readonly overlayContainer: OverlayContainer) {
    setTimeout(() => {
      this.toggleDarkMode();
    }, 2000);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }
}
