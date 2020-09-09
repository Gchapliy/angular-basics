import {Component} from '@angular/core';
import {interval, observable, Observable, Subscription} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;

  constructor() {
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1500);
      setTimeout(() => {
        observer.complete();
      }, 2100);
      setTimeout(() => {
        observer.error('Something went wrong');
      }, 2000);
      setTimeout(() => {
        observer.next(2);
      }, 2500);
    });

    this.sub = stream$
      .subscribe(
        value => console.log('Next: ', value),
        error => console.log('Error: ', error),
        () => console.log('Complete')
      );
  }

  stop(): void {
    this.sub.unsubscribe();
  }

}
