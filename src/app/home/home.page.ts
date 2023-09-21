import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  private readonly collection;
  private readonly skills$;
  public data: any;

  constructor(
    private readonly spinner: NgxSpinnerService,
    private readonly firestore: Firestore,
    private readonly translate: TranslateService,
  ) {
    this.collection = collection(this.firestore, 'skills');
    this.skills$ = collectionData(this.collection);

    translate.addLangs(['en', 'fr', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('es');
  }

  ngOnInit() {
    this.spinner.show();
    this.skills$.subscribe({
      next: data => {
        this.data = data;
        this.spinner.hide();
      },
      error: (err?: any) => {
        this.spinner.hide();
        console.error(err);
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }
}
