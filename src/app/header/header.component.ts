import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('kritHeader') kritHeader: ElementRef;

  backgroundSize: string;

  constructor() { }

  ngOnInit() {
    this.backgroundSize = this.calculateBackgroundSize();
  }

  @HostListener('window:resize', []) onScrollEvent() {
    this.backgroundSize = this.calculateBackgroundSize();
  }

  calculateBackgroundSize(): string {
    const el = this.kritHeader.nativeElement;
    const newWidth = el.clientWidth;
    const newHeight = el.clientHeight;
    const pictureTooLarge = (newWidth / newHeight) > 1.75;
    if (pictureTooLarge) {
      return (newHeight * 1.22) + 'px';
    } else {
      return '70%';
    }
  }

}
