import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPanOnScroll]'
})
export class PanOnScrollDirective {

  private palettes;
  private currLeftPos = -200;
  private lastScrollTop = 0;

  constructor(el: ElementRef) {
    this.palettes = el.nativeElement;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      // Downscroll code
      this.currLeftPos += 0.1;
    } else {
      // Upscroll code
      this.currLeftPos -= 0.1;
    }
    this.lastScrollTop = st;

    // Reset left position if we have gone too far
    if (this.currLeftPos > -1 || this.currLeftPos < -399) {
      this.currLeftPos = -200;
    }

    // Change the style to the new position
    this.palettes.style.left = this.currLeftPos + '%';
  }

}
