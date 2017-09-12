import { Component, OnInit, Input, Output, HostListener, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {

  @Input() bookmarkIndex: number;
  @Input() contentName: string;
  @Input() id: string;
  @Input() includeFooter = false;

  @Output() topContent: EventEmitter<any> = new EventEmitter();

  @ViewChild('contentSection') contentSection: ElementRef;

  constructor() { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const el = this.contentSection.nativeElement;
    const parent = this.contentSection.nativeElement.offsetParent;

    if (el.offsetTop <= parent.scrollTop && (el.offsetTop + el.clientHeight * 2) > parent.scrollTop) {
      this.topContent.emit(this.contentName);
    }
  }

}
