import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import ICompany from './interfaces/ICompany';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const API_URI = 'https://doit-hr-app.herokuapp.com/api/companies/';

@Injectable()
export class CompanyService {

    private _hasCompany: BehaviorSubject<boolean> = new BehaviorSubject(this._checkCompany());

    public readonly hasCompany: Observable<boolean> = this._hasCompany.asObservable();

    constructor(private _http: HttpClient) { }

    private _getUser() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user && user.success) {
            return user.msg;
        } else {
            return false;
        }
    }

    private _checkCompany(): boolean {
        if (this._getUser().company) {
            return true;
        } else {
            return false;
        }
    }

    public checkCompanyUpdate(update: boolean): void {
        this._hasCompany.next(update);
    }

    public checkCompany(): Observable<boolean> {
        return this.hasCompany.map(res => {
            console.log(res);
            return res;
        });
    }

    private _getRequestHeaders() {
        const companyUser = this._getUser();
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

    getCompany(): Observable<ICompany | boolean> {
        const companyUser = this._getUser();
        const options = this._getRequestHeaders();
        if (options) {
            return this._http.get<ICompany>(`${API_URI}${companyUser.company._id}`, options).pipe(
                map((data: any) => {
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

    createCompany(company: ICompany): Observable<ICompany | boolean> {
        const options = this._getRequestHeaders();
        if (options) {
            return this._http.post<ICompany>(API_URI, company, options).pipe(
                map((res: any) => {
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
