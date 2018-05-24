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

    private getUser() {
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

    private getRequestHeaders() {
        const companyUser = this.getUser();
        const headerOptions = {
            'Content-Type': 'application/json',
            Authorization: ''
        };
        if (companyUser && companyUser.token) {
            headerOptions.Authorization = companyUser.token;
        } else {
            return false;
        }
        const headers = new HttpHeaders(headerOptions);
        const options = {
            headers: headers
        };
        return options;
    }

    getCompany(): Observable<any> {
        const companyUser = this.getUser();
        const options = this.getRequestHeaders();
        if (options) {
            return this._http.get<any>(`${API_URI}${companyUser.company._id}`, options).pipe(
                map(data => {
                    return data.company;
                }),
                catchError(error => {
                    return of(error);
                })
            );
        } else {
            return of(false);
        }
    }

    createCompany(company): Observable<any> {
        const options = this.getRequestHeaders();
        if (options) {
            return this._http.post<any>(API_URI, company, options).pipe(
                map(res => {
                    return res.msg.company;
                }),
                catchError(error => {
                    console.error(error.error);
                    return of(error.error.success);
                })
            );
        } else {
            return of(false);
        }
    }

}
