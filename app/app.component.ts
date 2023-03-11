import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  @ViewChild('f') signupForm: NgForm;
  onFormSubmit(f: NgForm) {
    console.log(this.signupForm);
  }
}
