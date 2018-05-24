import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    public hasCompany: boolean;

    constructor(private _companyService: CompanyService) { }

    ngOnInit() {
        this.switchView();
    }

    switchView() {
        this._companyService.checkCompany()
            .subscribe(res => {
                console.log(res);
                this.hasCompany = res;
            });
    }

}
