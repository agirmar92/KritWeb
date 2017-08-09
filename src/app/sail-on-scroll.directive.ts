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
    const shipWidth = $event.target.body.clientWidth * 0.46;
    console.log(shipWidth);
    if (this.currRightPos <= -shipWidth) {
      this.currRightPos = 0;
    }
    this.ships.style.right = --this.currRightPos + 'px';
  }

}
