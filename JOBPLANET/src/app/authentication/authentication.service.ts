import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catchError'

const api: string = 'https://doit-hr-app.herokuapp.com/api/auth/login';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }

    login(username: string, password: string) {
        console.log(`BBBBBBBBBBBBBBBBBBBBB`);

        const data = {
            username,
            password
        }
        console.log(`data`);
        console.log(data);
        console.log(`api`);
        console.log(api);

        return this.http.post(api, data).pipe(
            map(user => {
                console.log(user);

                // if (user && user.token) {
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                // }
                // console.log(user)
                // return user;
                // ;

            }),
            catchError(error => of(console.log(error))));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

}
