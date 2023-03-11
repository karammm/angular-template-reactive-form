import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  gender="male";
  about="";
  @ViewChild('f') signupForm: NgForm;
  onFormSubmit(f: NgForm) {
    console.log(this.signupForm);
  }

  fillValues(){
    //for seting all values use setValue and to set few values use patchValue
    this.signupForm.form.patchValue({
      userData:{
        email:'karam@siila.org',
        username:"karam"
      },
      // gender:'male',
      // about:'About US'
    })
  }
}
