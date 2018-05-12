import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class JobsService {

  constructor(private _http: Http) { }

  getAllJobs(): Observable<any> {
    return this._http.get('http://doit-hr-app.herokuapp.com/API/Jobs')
        .map((res: Response) => res.json());
}


}
