import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  
      login(username: string, password: string) {
          return this.http.post<any>('doit-hr-app.herokuapp.com/api/auth/login', { username: username, password: password })
              .map(user => {
                  if (user && user.token) {
                      localStorage.setItem('currentUser', JSON.stringify(user));
                  }
                  console.log(user)
                  return user;
                  ;
                  
              });
      }
  
      logout() {
          localStorage.removeItem('currentUser');
      }

}
