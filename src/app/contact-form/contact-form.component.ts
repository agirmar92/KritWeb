import { Component, OnInit } from '@angular/core';

import { Message } from '../message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public newMessage = new Message();
  private submitted = false;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
  }

}
