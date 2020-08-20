import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() post: Post;
  @Output() remove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentCheck');
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  removePost(): void {
    this.remove.emit(this.post.id);
  }
}
