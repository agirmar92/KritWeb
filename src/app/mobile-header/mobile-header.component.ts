import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  @Output() togglingMenu: EventEmitter<any> = new EventEmitter();

  public menuIsOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.togglingMenu.emit(this.menuIsOpen);
  }

  closeMenu() {
    this.menuIsOpen = false;
    this.togglingMenu.emit(false);
    setTimeout(function() {
      window.scrollBy(0, -60);
    }, 520);
  }

}
