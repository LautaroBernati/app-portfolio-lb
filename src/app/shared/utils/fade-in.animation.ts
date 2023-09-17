import { trigger, transition, style, animate } from "@angular/animations";

export function fadeIn() {
  return [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),           // initial styles
        animate('200ms',
          style({ opacity: 1 })          // final style after the transition has finished
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })          // we asume the initial style will be always opacity: 1
        )
      ])
    ])
  ]
}
