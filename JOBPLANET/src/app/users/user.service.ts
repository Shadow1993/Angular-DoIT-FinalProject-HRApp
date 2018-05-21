import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

getAll() {
    return this.http.get('http://doit-hr-app.herokuapp.com/api/Users/getUsers');
}

getByRole(role: string) {
    return this.http.get('http://doit-hr-app.herokuapp.com/api/User/GetUsersByRole/' + role);
  }

getByCompany(companyName: string) {
    return this.http.get('http://doit-hr-app.herokuapp.com/api/User/GetUsersByCompany/' + companyName);
}

editUser(user: User) {
    return this.http.post('http://doit-hr-app.herokuapp.com/api/User/Edit', user);
}

getDetails(id: string) {
  return this.http.get('http://doit-hr-app.herokuapp.com/api/User/Details/' + id);
}  

registerUser(user: User) {
  return this.http.post('http://doit-hr-app.herokuapp.com/api/User/Register', user);
  }

authorizeUser(username: string, password: string) {
  return this.http.post('http://doit-hr-app.herokuapp.com/api/User/', { username, password });
  }  

deleteUser(id: string) {
    return this.http.get('http://doit-hr-app.herokuapp.com/api/User/' + id);
}

}
