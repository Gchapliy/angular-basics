import {Component} from '@angular/core';
import {boxAnimation} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //for animations
  animations: [
    boxAnimation
  ]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted($event: AnimationEvent) {

  }

  animationDone($event: AnimationEvent) {

  }
}
