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

  public listOfKeywords = ['test', '123', 'kek', 'asdf'];

  constructor(private _http: Http, private _jobsKey: JobsService) { 
    
  }

  ngOnInit() {
    this._jobsKey.getJobsByKeyword(this.listOfKeywords[0]).subscribe(data => {
      this._jobsKey = data;
      console.log(data);
    });

      
  
  }

}
