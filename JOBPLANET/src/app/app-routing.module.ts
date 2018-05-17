import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './authentication/auth.guard';
import { CompanyComponent } from './company/company.component';

const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }, // canActivate: [AuthGuard]
    { path: 'jobs', component: JobsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'company', component: CompanyComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
