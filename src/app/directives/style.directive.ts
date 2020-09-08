import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void{
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void{
    this.r.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') onLeave(): void{
    this.r.setStyle(this.el.nativeElement, 'color', null);
  }
}
