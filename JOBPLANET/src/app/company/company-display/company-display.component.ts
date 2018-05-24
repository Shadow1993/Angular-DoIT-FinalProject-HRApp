import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import ICompany from '../interfaces/ICompany';

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
                console.log(data);
                if (data) {
                    this.company = <ICompany>data;
                }
            });
    }

}
