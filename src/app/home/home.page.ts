import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  get name() {
    return this.loginForm.get('name');
  }
  get pin1() {
    return this.loginForm.get('pin1');
  }
  get pin2() {
    return this.loginForm.get('pin2');
  }
  get pin3() {
    return this.loginForm.get('pin3');
  }
  get pin4() {
    return this.loginForm.get('pin4');
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'Username is required'},
      { type: 'maxlength', message: 'Username can not be longer than 20 characters'}
    ],
    pin1: [
      { type: 'required', message: 'Enter your PIN'},
      { type: 'patern', message: 'Enter only numbers'}
    ],
    pin2: [
      { type: 'required', message: 'Enter your PIN'},
      { type: 'patern', message: 'Enter only numbers'}
    ],
    pin3: [
      { type: 'required', message: 'Enter your PIN'},
      { type: 'patern', message: 'Enter only numbers'}
    ],
    pin4: [
      { type: 'required', message: 'Enter your PIN'},
      { type: 'patern', message: 'Enter only numbers'}
    ]
  };

  loginForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    pin1: ['', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]],
    pin2: ['', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]],
    pin3: ['', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]],
    pin4: ['', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]]
  });

  username:string;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder) {}

  login(){
    console.log(this.loginForm.value);
    
    this.router.navigateByUrl('/welcome');
  }
}
