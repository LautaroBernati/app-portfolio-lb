import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, mergeMap } from 'rxjs';
import { faBirthdayCake, faMapMarker, faEnvelope, faAtom, faGraduationCap, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fadeIn } from '../shared/utils/fade-in.animation';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  animations: fadeIn(),
})
export class AboutPage {
  public readonly pic$;
  public readonly faBirthdayCake = faBirthdayCake;
  public readonly faMapMarker = faMapMarker;
  public readonly faEnvelope = faEnvelope;
  public readonly faGithub = faGithub;
  public readonly faLinkedinIn = faLinkedinIn;
  public readonly atomIcon = faAtom;
  public readonly capIcon = faGraduationCap;
  public readonly planeIcon = faPlane;
  public readonly birthday = new Date(1997, 8, 20);
  public readonly years = new Date(new Date().getFullYear() - this.birthday.getTime());

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

  public calculateAge(birthDate: Date): number {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    const hasBirthdayOccurred = currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

    if (!hasBirthdayOccurred) {
      return age - 1;
    }

    return age;
  }
}
