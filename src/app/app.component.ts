import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Krít';
  currGraphic = '';

  onTopContent(contentName): void {
    this.currGraphic = contentName;
  }

}
