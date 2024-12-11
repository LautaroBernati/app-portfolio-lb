import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faBirthdayCake, faMapMarker, faEnvelope, faAtom, faGraduationCap, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fadeIn } from '../shared/utils/fade-in.animation';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  animations: fadeIn(),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
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
  public showFullContent = false;

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

  public onToggleReadBtn(): void {
    this.showFullContent = !this.showFullContent;
  }

  public curateText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
