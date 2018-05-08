import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompanyComponent } from './company/company.component';
import { UserService } from './users/user.service';
import { JobsService } from './jobs/jobs.service';
import { CompanyService } from './company/company.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    JobsComponent,
    CompanyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, JobsService, CompanyService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
