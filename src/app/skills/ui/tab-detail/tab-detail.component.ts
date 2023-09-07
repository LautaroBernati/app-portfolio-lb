import { Component, Input, OnInit, Inject } from '@angular/core';
import { Skill } from '../../data-access/skills.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'sk-tab-detail-ui',
  templateUrl: 'tab-detail.component.html',
  styleUrls: ['tab-detail.component.scss']
})
export class TabDetailComponent implements OnInit {
  @Input() public descripcion: string = '';
  @Input() public skill: Skill | null = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // console.log(this.skill);
  }

  onImgClick(img: Blob) {
    this.dialog.open(ImageDetailDialog, { data: img });
  }
}

@Component({
  selector: 'sk-tab-detail-dialog-ui',
  template: `
  <div style="display: flex; flex-direction: column; padding: 0.5rem;">
    <div style="margin-bottom: 0.5rem; align-self: flex-end;">
      <button type="button" mat-icon-button color="warn" aria-label="Button with cross icon" mat-dialog-close>
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <img [src]="data | blobToString" alt="Image_detail">
  </div>
  `,
})
export class ImageDetailDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Blob) { }
}
