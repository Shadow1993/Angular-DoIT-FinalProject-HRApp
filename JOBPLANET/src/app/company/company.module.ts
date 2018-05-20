import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyDisplayComponent } from './company-display/company-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CompanyComponent,
        CompanyCreateComponent,
        CompanyDisplayComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        CompanyRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [CompanyService]
})
export class CompanyModule { }
