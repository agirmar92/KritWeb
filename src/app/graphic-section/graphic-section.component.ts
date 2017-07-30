import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-graphic-section',
  templateUrl: './graphic-section.component.html',
  styleUrls: ['./graphic-section.component.css']
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
