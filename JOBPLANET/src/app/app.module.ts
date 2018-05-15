import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompanyComponent } from './company/company.component';
import { UserService } from './users/user.service';
import { CompanyService } from './company/company.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { JobsService } from './jobs/jobs.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    JobsComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpModule
  ],
  providers: [UserService, CompanyService, JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
