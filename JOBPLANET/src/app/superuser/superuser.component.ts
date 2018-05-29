import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})

@Injectable()
export class SuperuserComponent implements OnInit {

  public options = ['Users', 'Jobs', 'Send message']

  public currentNav;


  constructor(private route: ActivatedRoute,
    private _router: Router,
    private http: HttpClient) {

  }

  ngOnInit() { }

  anyUser(): boolean {
    if (localStorage.getItem('currentUser')) {
      console.log('yes');
      return true;
    } else {
      console.log('no');
      return false;
    }
  }





      navigateTo() {
        if(this.currentNav == 'Send message') {
      this._router.navigate(['email-form'], { relativeTo: this.route });
    }
    // return false;
    else if (this.currentNav == 'Jobs') {
      this._router.navigate(['jobslist'], { relativeTo: this.route });

    }
    else if (this.currentNav == 'Users') {
      this._router.navigate(['userslist'], { relativeTo: this.route });

    }



  }
  onChange(e) {
    console.log(e);
    this.currentNav = e.target.value;
    this.navigateTo();
  }
}


