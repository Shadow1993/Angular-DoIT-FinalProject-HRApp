import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobsService } from './jobs.service';


@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [JobsComponent],
  providers: [JobsService]
})
export class JobsModule { }
