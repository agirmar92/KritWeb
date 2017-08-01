import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-graphic-section',
  templateUrl: './graphic-section.component.html',
  styleUrls: ['./graphic-section.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class GraphicSectionComponent implements OnInit {

  @Input() graphicName: string;

  constructor() { }

  ngOnInit() {
    console.log(this.graphicName);
  }

  sailForward(event) {
    console.log(event);
  }

}
