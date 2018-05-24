import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public isLoggedIn = false;

    constructor(private _auth: AuthenticationService) { }

    ngOnInit() {
        this._getUserStatus();
    }

    private _getUserStatus(): void {
        this._auth.userLoggedIn()
            .subscribe(res => {
                this.isLoggedIn = res;
            });
    }

    onLogOut(): void {
        this._auth.logout();
    }
}
