import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyDisplayComponent } from './company-display/company-display.component';

@NgModule({
    declarations: [
        CompanyComponent,
        CompanyCreateComponent,
        CompanyDisplayComponent
    ],
    imports: [
        BrowserModule,
        CompanyRoutingModule
    ],
    providers: [CompanyService]
})
export class CompanyModule { }
