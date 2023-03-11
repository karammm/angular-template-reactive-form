import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

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
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('female')
    })
  }
  onSubmit(){
    console.log(this.signUpForm)
  }
}
