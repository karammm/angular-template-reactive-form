import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders=['male','female'];
  signUpForm:FormGroup;
  ngOnInit():void{
    this.signUpForm= new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('female',Validators.required)
    })
  }
  onSubmit(){
    console.log(this.signUpForm)
  }
}
