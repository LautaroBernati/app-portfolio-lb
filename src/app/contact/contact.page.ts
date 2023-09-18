import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})

export class ContactMePage implements OnInit {
  public readonly mailIcon = faEnvelope;

  constructor() { }

  ngOnInit() { }
}