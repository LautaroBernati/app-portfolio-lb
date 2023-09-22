import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, startWith, takeUntil } from 'rxjs';
import Typed, { TypedOptions } from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();
  private typedInstance?: Typed;

  constructor(
    private readonly translateService: TranslateService,
  ) { }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.translateService.onLangChange.pipe(
      startWith({ lang: this.translateService.currentLang }),
      takeUntil(this.destroy$),
    ).subscribe(value => {
      switch (value.lang) {
        case 'en':
          this.createTyped(['', 'I am Full-Stack.', 'I build Web apps.', 'I build Mobile apps.']);
          break;
        case 'es':
          this.createTyped(['', 'Soy Full-Stack.', 'Desarrollo Web apps.', 'Desarrollo Mobile apps.']);
          break;
      }
    });
  }

  private createTyped(strings: string[]) {
    this.typedInstance?.destroy();
    const options: TypedOptions = {
      strings,
      typeSpeed: 150,
      backSpeed: 100,
      loop: true
    };
    this.typedInstance = new Typed('.typed', options);
    this.typedInstance.reset(true);
  }
}
