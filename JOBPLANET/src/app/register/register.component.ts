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
        name: ['', [Validators.required, Validators.minLength(4)]],
        lastName: ['', [Validators.required, Validators.minLength(10)]],
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required]],
        status: ['', [Validators.required, Validators.email]],
        contry: ['', [Validators.required]],
        locationChange: ['', [Validators.required]],
        jobType: ['', [Validators.required]],
        experience: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        additionalInfo: ['', [Validators.required]],
        role: ['', [Validators.required]]
    }
    );

  }
  onSubmit() {
    console.log(this.createRegisterForm.value);
}
}
