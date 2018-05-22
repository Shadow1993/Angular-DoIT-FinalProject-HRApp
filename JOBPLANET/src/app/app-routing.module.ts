import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './authentication/auth.guard';
import { CompanyComponent } from './company/company.component';
import { SuperuserComponent } from './superuser/superuser.component';
import { EmailFormComponent } from './superuser/email-form/email-form.component';
import { AlertsComponent } from './superuser/alerts/alerts.component';
import { JobslistComponent } from './superuser/jobslist/jobslist.component';
import { UserslistComponent } from './superuser/userslist/userslist.component';

const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }, // canActivate: [AuthGuard]
    { path: 'jobs', component: JobsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'company', component: CompanyComponent },
    {
        path: 'superuser',
        component: SuperuserComponent,
        children: [
            {
                path: '', redirectTo: 'superuser', pathMatch: 'full'
               
            },
        
            {
                path: 'alerts',
                component:  AlertsComponent 
            },

            {
                path: 'email-form',
                component:  EmailFormComponent 
            },
            {
                path: 'jobslist', 
                component:  JobslistComponent
                
            },

            {
                path: 'userslist',
                component:  UserslistComponent 
            },

        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
