import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        'email': new FormControl(null,[Validators.required,Validators.email],[this.isRestrictedEmails]),
      }),
      'gender': new FormControl('female',Validators.required),
      'hobbies': new FormArray([])//list of form controls
    });
    this.signUpForm.valueChanges.subscribe(value=>{
      console.log(value);
    });//for changing any value in dom
    this.signUpForm.statusChanges.subscribe(value=>{
      console.log(value);
    });//givues you corrent status
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

  isRestrictedName(control:FormControl): {[s:string]:boolean}{
    if(this.restrictedNames.includes(control.value)){
      return {nameIsRestricted:true};
    }
    return null;
  }

  isRestrictedEmails(control:FormControl):Promise<any> | Observable<any>{
    let promise= new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            if(control.value==='test@test.com'){
              resolve({emailIsRestricted:true});
            }else{
              resolve(null);
            }
        },2000)
    });
    return promise;
  }

  onAddHobby(){
    const control = new FormControl(null,[Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}
