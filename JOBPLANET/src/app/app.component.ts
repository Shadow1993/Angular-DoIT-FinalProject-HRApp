import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isLoggedIn: boolean = false;

  constructor(private _auth: AuthenticationService) { }

  ngOnInit() {
    this._auth.userLoggedIn().map(res => res)
      .subscribe(res => {
        this.isLoggedIn = res;
      });
  }


}
