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
  public submitting = false;
  public responseMsg = '';
  private recipient = 'kfl@kfl.is';
  private subject = 'New message from kfl.is';
  private fromWebsite = 'www.kfl.is';
  private apiEndpointUrl = 'http://api.vefsidugerdin.is/send';

  constructor(private http: Http) { }

  ngOnInit() { }

  onSubmit() {
    if (!this.submitting) {
      const payload = {
        'recipient': this.recipient,
        'subject': this.subject,
        'other': this.newMessage.other ? this.newMessage.other : '',
        'fromWebsite': this.fromWebsite,
        'senderEmail': this.newMessage.email,
        'senderName': this.newMessage.name,
        'senderSSN': this.newMessage.ssn,
        'senderCompany': this.newMessage.company,
        'senderTel': this.newMessage.phoneNumber,
        'senderProductType': this.newMessage.productType,
        'senderAmountNeeded': this.newMessage.amountNeeded
      };

      this.submitting = true;
      this.http.post(this.apiEndpointUrl, JSON.stringify(payload))
        .subscribe(
          res => {
            // Success
            this.submitting = false;
            this.responseMsg = 'Skilaboð hafa verið send';
            this.clearForm();
          },
          err => {
            // Error
            this.submitting = false;
            this.responseMsg = 'Eitthvað fór úrskeiðis. Endilega sendu okkur tölvupóst á ' + this.recipient;
          }
        );
    }

  }

  clearForm() {
    this.newMessage = new Message();
  }

}
