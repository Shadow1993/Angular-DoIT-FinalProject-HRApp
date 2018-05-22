import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { AuthenticationService } from './../authentication/authentication.service'

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  user: UsersComponent = new UsersComponent();
  usernameMessage: string;
  passwordMessage: string;
  returnUrl: string;
  // importing validation messg from html to component, no longer in html!
  private validationMsgUsername = {
    required: 'Please enter your username!',
    minlength: 'Username must be at least 3 characters long!'
  }
  private validationMsgPassword = {
    required: 'Please enter your password!',
    minlength: 'Password is at least 3 characters!'

  }

  constructor(private _fb: FormBuilder, private _auth:AuthenticationService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.logInForm = this._fb.group({
      // name: { value: 'n/a', disabled: true }, ako hocemo default vrednost i da polje ne bude aktivno ni zahtevano za submit
      userGroup: this._fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],

        // email: ['temp@temp.com', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
        password: ['', [Validators.required, Validators.minLength(3)]],
      }),
      submit: 'true'

    });

    const usernameControl = this.logInForm.get('userGroup.username');
    // watcher for value changes in email with function setMessage
    usernameControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setUsernameMessage(usernameControl));

    const passwordControl = this.logInForm.get('userGroup.password');
    passwordControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setPasswordMessage(passwordControl));
    
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  save() {
    console.log(this.logInForm);
    console.log('Saved: ' + JSON.stringify(this.logInForm.value));
  }

  setUsernameMessage(c: AbstractControl): void {
    this.usernameMessage = ''; // first clear all messages
    if ((c.dirty || c.touched) && c.errors) {
      this.usernameMessage = Object.keys(c.errors).map(key =>
        this.validationMsgUsername[key]).join('');
    }

  }

  setPasswordMessage(p: AbstractControl): void {
    this.passwordMessage = ''; // first clear all messages
    if ((p.dirty || p.touched) && p.errors) {
      this.passwordMessage = Object.keys(p.errors).map(key =>
        this.validationMsgPassword[key]).join('');
    }

  }

  login() {
    // console.log(this.logInForm.value.name);
    // console.log(this.logInForm.status);
    
    this._auth.login(this.logInForm.value.userGroup.username, this.logInForm.value.userGroup.password)
    .subscribe(
      data => {
          this.router.navigate([this.returnUrl]);
      });
  }

  isLoggedIn() {
    if (this._auth.adminLoggedIn('admin')) {
      return true;
    }
  }

}
