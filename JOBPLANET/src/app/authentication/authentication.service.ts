import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catchError'

const api: string = 'https://doit-hr-app.herokuapp.com/api/auth/login';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        return this.http.post<any>(api, {username, password}).pipe(
            map(user => {
                console.log(user);

                if (user && user.msg.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
                

            }),
            catchError(error => of(console.log(error))));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    userLoggedIn(role) {
        if (role === 'client') {
            return true;
        }
    }

    adminLoggedIn(role) {
        if (role === 'admin') {
            return true;
        }
    }

    modLoggedIn(role) {
        if (role === 'mod') {
            return true;
        }
    }



}
