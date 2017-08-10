import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx/';

import { Message } from '../message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public newMessage = new Message();
  private submitting = false;
  private responseMsg = '';
  private recipient = 'agirmar92@gmail.com';
  private subject = 'New message from krit.is';
  private fromWebsite = 'www.krit.is';
  private apiEndpointUrl = 'http://api.vefsidugerdin.is/send';

  constructor(private http: Http) { }

  ngOnInit() { }

  onSubmit() {
    if (!this.submitting) {
      const payload = {
        'recipient': this.recipient,
        'subject': this.subject,
        'message': this.newMessage.messageText,
        'fromWebsite': this.fromWebsite,
        'senderEmail': this.newMessage.email,
        'senderName': this.newMessage.name,
        'senderSSN': this.newMessage.ssn,
        'senderCompany': this.newMessage.company,
        'senderTel': this.newMessage.phoneNumber
      };

      this.submitting = true;
      this.http.post(this.apiEndpointUrl, JSON.stringify(payload))
        .subscribe(
          res => {
            // Success
            this.responseMsg = 'Skilaboð hafa verið send';
            this.clearForm();
          },
          err => {
            // Error
            this.responseMsg = 'Eitthvað fór úrskeiðis. Endilega sendu okkur tölvupóst á ' + this.recipient;
          },
          () => this.submitting = false
        );
    }

  }

  clearForm() {
    this.newMessage = new Message();
  }

}
