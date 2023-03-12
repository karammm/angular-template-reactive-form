import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders=['male','female'];
  restrictedNames:any=['verma'];
  signUpForm:FormGroup;
  get hobbyControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  ngOnInit():void{
    this.signUpForm= new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.isRestrictedName.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email]),
      }),
      'gender': new FormControl('female',Validators.required),
      'hobbies': new FormArray([])//list of form controls
    })
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

  isRestrictedName(control:FormControl){
    if(this.restrictedNames.includes(control.value)){
      return {nameIsRestricted:true};
    }
    return null;
  }

  onAddHobby(){
    const control = new FormControl(null,[Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}
