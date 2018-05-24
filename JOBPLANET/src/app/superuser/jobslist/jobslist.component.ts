import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { JobsService } from '../../jobs/jobs.service';



@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {


  constructor(private _http: Http, private _jobsKey: JobsService) { }


  filterJobsByKeywords(){
      this._jobsKey.getJobsByKeyword('asdf').subscribe(data => {
      this._jobsKey = data;
      console.log(data);
    });

  }

  

  ngOnInit() {
      this._jobsKey.getJobsByKeyword('key').subscribe(data => {
      this._jobsKey = data;
      console.log(data);
    });

      
  
  }

}
