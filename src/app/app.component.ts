import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Krít';
  currGraphic = '';
  menuIsOpen = false;

  onTopContent(contentName): void {
    this.currGraphic = contentName;
  }

  onMenuToggle(menuIsOpen): void {
    this.menuIsOpen = menuIsOpen;
  }

}
