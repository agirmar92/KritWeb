import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWarehousePanOnScroll]'
})
export class WarehousePanOnScrollDirective {

  private warehouse;
  private currPos = 0;
  private lastScrollTop = 0;

  constructor(el: ElementRef) {
    this.warehouse = el.nativeElement;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      // Downscroll code
      this.currPos -= 1;
    } else {
      // Upscroll code
      this.currPos += 1;
    }
    this.lastScrollTop = st;

    // Change the style to the new position
    this.warehouse.style['background-position-x'] = this.currPos + 'px';
  }

}
