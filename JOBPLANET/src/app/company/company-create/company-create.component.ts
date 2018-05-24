import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
    selector: 'app-company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

    public createCompanyForm: FormGroup;

    constructor(private _fb: FormBuilder, private _companyService: CompanyService) { }

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
        this._companyService.createCompany(this.createCompanyForm.value)
            .subscribe(res => {
                if (res) {
                    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    const user = { ...currentUser };
                    user.msg.company = res;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    window.location.reload();
                }
            });
    }

}
