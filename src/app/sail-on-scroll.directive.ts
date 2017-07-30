import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSailOnScroll]'
})
export class SailOnScrollDirective {
  private ships;
  private currRightPos = 0;

  constructor(el: ElementRef) {
    this.ships = el.nativeElement;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (this.currRightPos < -500) {
      this.currRightPos = 0;
    }
    this.ships.style.right = --this.currRightPos + 'px';
  }

}
