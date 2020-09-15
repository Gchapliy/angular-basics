import {Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceInDown, bounceInUp, bounceOutUp} from 'ng-animate';

@Component({
  selector: 'app-animate',
  styleUrls: ['./animate.component.scss'],
  template: `
      <button (click)="visible = !visible">Toggle</button>
      <hr>
      <div [@bounce] class="react" *ngIf="visible"></div>
  `,
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounceInUp)),
      transition('* => void', useAnimation(bounceOutUp, {
        params: {
          timing: 3,
          delay: 0.3
        }
      }))])
  ]
})

export class AnimateComponent implements OnInit {

  visible = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
