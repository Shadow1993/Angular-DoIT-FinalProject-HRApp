import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
    selector: 'app-company-display',
    templateUrl: './company-display.component.html',
    styleUrls: ['./company-display.component.css']
})
export class CompanyDisplayComponent implements OnInit {

    public company = {
        city: '',
        country: '',
        name: '',
        phone: '',
        website: '',
        email: '',
        description: ''
    };

    constructor(private _companyService: CompanyService) { }

    ngOnInit() {
        this.getUserCompany();
    }

    getUserCompany() {
        this._companyService.getCompany()
            .subscribe(data => {
                this.company = data;
                console.log(data);
            });
    }

}
