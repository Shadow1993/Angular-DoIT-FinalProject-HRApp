import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';

@NgModule({
    declarations: [
        CompanyComponent
    ],
    imports: [
        BrowserModule,
        CompanyRoutingModule
    ],
    providers: [CompanyService]
})
export class CompanyModule { }
