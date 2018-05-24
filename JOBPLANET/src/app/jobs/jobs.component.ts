import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public id;
  public jobs;

  constructor(private _route: ActivatedRoute, private _JobsService: JobsService) {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })
   }

  ngOnInit() {
    this._JobsService.getAllJobs().subscribe(data => {
      this.jobs = data.job;
      // console.log(data);
    });

  }

}
