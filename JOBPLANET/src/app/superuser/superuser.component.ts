import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})

  
export class SuperuserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _router: Router) {

   }

  ngOnInit() {
  
  }
  navigateTo(value) {
    if (value) {
      this._router.navigate(['/email-form'], { relativeTo: this.route });
    }
    return false;
  }

  }


