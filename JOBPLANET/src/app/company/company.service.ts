import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


const user = JSON.parse(localStorage.getItem('currentUser'));
const API_URI = 'https://doit-hr-app.herokuapp.com/api/companies/';

@Injectable()
export class CompanyService {

    constructor(private _http: HttpClient) { }

    getUser() {
        if (user && user.success) {
            return user.msg;
        } else {
            return false;
        }
    }

    hasCompany(): Observable<any> {
        if (this.getUser().company) {
            return of(true);
        } else {
            return of(false);
        }
    }

    getCompany(): Observable<any> {
        const companyUser = this.getUser();
        const headerOptions = {
            'Content-Type': 'application/json',
            Authorization: ''
        };
        if (companyUser && companyUser.token && companyUser.company) {
            headerOptions.Authorization = companyUser.token;
        } else {
            return of(false);
        }
        const headers = new HttpHeaders(headerOptions);
        const options = {
            headers: headers
        };
        return this._http.get<any>(`${API_URI}${companyUser.company._id}`, options).pipe(
            map(data => {
                return data.company;
            }),
            catchError(error => {
                return of(error);
            })
        );
    }

    createCompany(company): Observable<any> {
        // TODO
        return this._http.post<any>('', {}).pipe(
            map(res => {
                return res;
            }),
            catchError(error => {
                return of(error);
            })
        );
    }

}
