import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catchError'

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const api = 'https://doit-hr-app.herokuapp.com/api/auth/login';

@Injectable()
export class AuthenticationService {

    private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this.anyUser());

    public readonly isLoggedIn: Observable<boolean> = this._isLoggedIn.asObservable();

    constructor(private http: HttpClient, private _router: Router) { }

    anyUser(): boolean {
        if (localStorage.getItem('currentUser')) {
            console.log('yes');
            return true;
        } else {
            console.log('no');
            return false;
        }
    }

    login(username: string, password: string) {

        return this.http.post<any>(api, { username, password }).pipe(
            map(user => {
                console.log(user);

                if (user && user.msg.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    // Remove this when you get roles into play
                    this._router.navigate(['/jobs']);

                    this._isLoggedIn.next(true);

                    // window.location.reload();
                }
                return user;


            }),
            catchError(error => of(console.log(error))));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this._router.navigate(['/login']);
        this._isLoggedIn.next(false);

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

    userLoggedIn(): Observable<boolean> {
        console.log(this._isLoggedIn.getValue());
        return this._isLoggedIn.map(res => res);
    }



}
