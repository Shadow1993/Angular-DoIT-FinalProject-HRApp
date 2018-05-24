import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Router} from '@angular/router';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catchError'

const api: string = 'https://doit-hr-app.herokuapp.com/api/auth/login';

@Injectable()
export class AuthenticationService {


    constructor(private http: HttpClient, private _router: Router) { }

    login(username: string, password: string) {

        return this.http.post<any>(api, { username, password }).pipe(
            map(user => {
                console.log(user);

                if (user && user.msg.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    // window.location.reload();
                }
                return user;


            }),
            catchError(error => of(console.log(error))));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this._router.navigate(['/login']);
    }

    // userLoggedIn(role) {
    //     if (role === 'client') {
    //         return true;
    //     }
    // }

    // adminLoggedIn(role) {
    //     if (role==='admin') {
    //         return true;
    //     }
    // }

    // modLoggedIn(role) {
    //     if (role === 'mod') {
    //         return true;
    //     }
    // }

    userLoggedIn(): Observable<any> {
        if (localStorage.getItem("currentUser")) {
            return of(true);
        }
        else {
            return of(false);
        }
    }



}
