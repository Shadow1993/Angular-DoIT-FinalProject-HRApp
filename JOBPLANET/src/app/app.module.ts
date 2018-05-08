import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    JobsComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
