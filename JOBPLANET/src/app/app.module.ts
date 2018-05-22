import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { JobsComponent } from './jobs/jobs.component';
import { UserService } from './users/user.service';
import { CompanyService } from './company/company.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { JobsService } from './jobs/jobs.service';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './authentication/authentication.service';
import { CompanyModule } from './company/company.module';
import { SuperuserComponent } from './superuser/superuser.component';
import { EmailFormComponent } from './superuser/email-form/email-form.component';
import { JwtInterceptor } from './authentication/jwt.interceptor';
import { AlertsComponent } from './superuser/alerts/alerts.component';
import { UserslistComponent } from './superuser/userslist/userslist.component';
import { JobslistComponent } from './superuser/jobslist/jobslist.component';
// import { Http } from '@angular/http';



@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        JobsComponent,
        RegisterComponent,
        AuthenticationComponent,
        SuperuserComponent,
        EmailFormComponent,
        AlertsComponent,
        UserslistComponent,
        JobslistComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        // Http,
        AppRoutingModule,
        LoginModule,
        CompanyModule
    ],
    providers: [UserService, JobsService, AuthenticationService, {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      }],
    bootstrap: [AppComponent]
})
export class AppModule { }
