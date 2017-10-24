import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMoveLeftDownOnScroll]'
})
export class MoveLeftDownOnScrollDirective {
  private panel;

  constructor(el: ElementRef) {
    this.panel = el.nativeElement;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window.innerWidth > 768) {
      const graphicSize = window.innerHeight * 0.6;
      const contentSize = window.innerHeight;
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const topOfGraphic = contentSize * 2 + graphicSize * 2;
      const topOfFollowingContent = contentSize * 3 + graphicSize * 1;

      if (st < topOfGraphic) {
        // Set to inital position
        this.panel.style.left = 0 + '%';
        this.panel.style.bottom = 0 + '%';
      }

      // If graphics are visible
      if (st >= topOfGraphic && st <= topOfFollowingContent) {
        const distanceLeft = topOfFollowingContent - st;
        const distanceLeftPerc = distanceLeft / (window.innerHeight - graphicSize);

        // Change the style to the new position
        this.panel.style.left = Math.round(distanceLeftPerc * 100 - 100) + '%';
        this.panel.style.bottom = Math.round(distanceLeftPerc * 100 - 100) + '%';
      }
    }
  }

}
