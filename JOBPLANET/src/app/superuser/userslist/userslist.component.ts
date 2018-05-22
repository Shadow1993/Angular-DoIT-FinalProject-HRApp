import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../users/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  public id;
  public listOfUsers;

  constructor(private _route: ActivatedRoute,
    private _users: UserService, private http: HttpClient) {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      
    })

  }

  
  ngOnInit() {
    this._users.getAll().subscribe(data => {
      this.listOfUsers = data;
      console.log(data);

    });

  }
}  
