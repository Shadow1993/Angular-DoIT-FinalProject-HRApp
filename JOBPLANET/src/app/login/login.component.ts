import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  user: UsersComponent = new UsersComponent();

  constructor(private _fb: FormBuilder) {

   }

  ngOnInit() {
    this.logInForm = this._fb.group({
      // name: { value: 'n/a', disabled: true }, ako hocemo default vrednost i da polje ne bude aktivno ni zahtevano za submit
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      submit: ''

    })
  }
  populateTestData(): void {
    this.logInForm.setValue({
      name: "Dusica",
      email: "dsfa@adfsa.com",
      password: "passdsasds",
      submit: true
})
  }
  save() {
    console.log(this.logInForm);
    console.log('Saved: ' + JSON.stringify(this.logInForm.value));
  }

}
