import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';

const routes = [
    {
        path: 'company',
        component: CompanyComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class CompanyRoutingModule { }
