import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public createRegisterForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.createRegForm();
  }

  createRegForm() {

    this.createRegisterForm = this._fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        // status: ['', [Validators.required]],
        city: ['', [Validators.required, Validators.minLength(2)]],
        contry: ['', [Validators.required, Validators.minLength(2)]],
        locationChange: ['', [Validators.required]],
        jobType: ['', [Validators.required]],
        experience: ['', [Validators.required, Validators.minLength(5)]],
        gender: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required, Validators.minLength(8)]],
        additionalInfo: ['', [Validators.required, Validators.maxLength(200)]]
        // role: ['', [Validators.required]]
    }
    );

  }
  onSubmit() {
    console.log(this.createRegisterForm.value);
}
}
