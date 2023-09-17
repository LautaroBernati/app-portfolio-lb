import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, mergeMap } from 'rxjs';
import { faBirthdayCake, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fadeIn } from '../shared/utils/fade-in.animation';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  animations: fadeIn(),
})
export class AboutPage implements OnInit {
  public readonly pic$;
  public readonly faBirthdayCake = faBirthdayCake;
  public readonly faMapMarker = faMapMarker;
  public readonly faEnvelope = faEnvelope;
  public readonly faGithub = faGithub;
  public readonly faLinkedinIn = faLinkedinIn;

  constructor(private readonly http: HttpClient) {
    this.pic$ = this.http.get('assets/images/profile-pic.jpg', { responseType: 'blob' }).pipe(
      mergeMap(blob => {
        return from(new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const result = event.target?.result;
            if (result) {
              resolve(result as string);
            } else {
              reject(new Error('Failed to read blob.'));
            }
          };
          reader.onerror = (error) => {
            reject(error);
          };
          reader.readAsDataURL(blob);
        }));
      }),
    );
  }

  ngOnInit() { }
}
