import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {

  @Input() bookmarkIndex: number;

  constructor() { }

  ngOnInit() { }

}
