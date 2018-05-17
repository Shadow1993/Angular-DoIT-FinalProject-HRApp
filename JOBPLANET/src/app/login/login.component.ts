import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UsersComponent } from '../users/users.component';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  user: UsersComponent = new UsersComponent();
  emailMessage: string;
  passwordMessage: string;
  // importing validation messg from html to component, no longer in html!
  private validationMsgEmail = {
    required: 'Please enter your e-mail address!',
    pattern: 'Enter a valid e-mail address!'
  }
  private validationMsgPassword = {
    required: 'Please enter your password!',
    minlength: 'Password is at least 3 characters!'

  }    

  constructor(private _fb: FormBuilder) {

   }

  ngOnInit() {
    this.logInForm = this._fb.group({
      // name: { value: 'n/a', disabled: true }, ako hocemo default vrednost i da polje ne bude aktivno ni zahtevano za submit
      name: ['', [Validators.required, Validators.minLength(3)]],
      emailPwdGroup: this._fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
        password: ['', [Validators.required, Validators.minLength(3)]],
      }),
      submit: ''

    });

    const emailControl = this.logInForm.get('emailPwdGroup.email');
    // watcher for value changes in email with function setMessage
    emailControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setEmailMessage(emailControl));
    
      const passwordControl = this.logInForm.get('emailPwdGroup.password');
      passwordControl.valueChanges.subscribe(value =>
        this.setPasswordMessage(passwordControl));
  
    
  }

  save() {
    console.log(this.logInForm);
    console.log('Saved: ' + JSON.stringify(this.logInForm.value));
  }

  setEmailMessage(c: AbstractControl): void{
    this.emailMessage = ''; // first clear all messages
    if ((c.dirty || c.touched) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMsgEmail[key]).join('');
    }

  }

  setPasswordMessage(p: AbstractControl): void{
    this.passwordMessage = ''; // first clear all messages
    if ((p.dirty || p.touched) && p.errors) {
      this.passwordMessage = Object.keys(p.errors).map(key =>
        this.validationMsgPassword[key]).join('');
    }

  }

}
