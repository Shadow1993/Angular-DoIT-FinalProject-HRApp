import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

    public createCompanyForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.formCreate();
    }

    formCreate() {
        this.createCompanyForm = this._fb.group(
            {
                name: ['', [Validators.required, Validators.minLength(4)]],
                description: ['', [Validators.required, Validators.minLength(10)]],
                city: ['', [Validators.required, Validators.minLength(5)]],
                country: ['', [Validators.required, Validators.minLength(5)]],
                phone: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                website: ['', [Validators.required]]
            }
        );
    }

    onSubmit() {
        console.log(this.createCompanyForm.value);
    }

}
