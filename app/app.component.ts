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
  submitted=false;
  user={
    username:'',
    email:'',
    gender:'',
    about:''
  }
  @ViewChild('f') signupForm: NgForm;
  onFormSubmit(f: NgForm) {
    this.submitted=true;
    this.user.username= this.signupForm.value.userData.username;
    this.user.email= this.signupForm.value.userData.email;
    this.user.gender= this.signupForm.value.userData.gender;
    this.user.about= this.signupForm.value.userData.about;
    this.signupForm.reset();
  }

  fillValues(){
    //for seting all values use setValue and to set few values use patchValue
    this.signupForm.form.setValue({
      userData:{
        email:'karam@siila.org',
        username:"karam"
      },
      gender:'male',
      about:'About US'
    })
  }
}
