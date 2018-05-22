import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
// import { CompanyRoutingModule } from './company-routing.module';
// import { CompanyService } from './company.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        // CompanyRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    // providers: [RegisterService]
})
export class RegisterModule { }
