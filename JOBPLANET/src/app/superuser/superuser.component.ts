import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})


export class SuperuserComponent implements OnInit {

  public options = ['Users', 'Jobs', 'Alerts', 'Send message']

  public currentNav;

  constructor(private route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
  
  }
  navigateTo() {
    if (this.currentNav == 'Send message') {
      this._router.navigate(['email-form'], { relativeTo: this.route });
    }
    // return false;
  else if (this.currentNav == 'Alerts') {
    this._router.navigate(['alerts'], { relativeTo: this.route });

    }
    else if (this.currentNav == 'Jobs') {
      this._router.navigate(['jobslist'], { relativeTo: this.route } );
  
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


