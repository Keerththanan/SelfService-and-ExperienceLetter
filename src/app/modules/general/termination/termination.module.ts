import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminationComponent } from './termination.component';
import { EmployeeAddTerminationRecordComponent } from './employee-add-termination-record/employee-add-termination-record.component';
import { EmployeeArrangeDiscussionComponent } from './employee-arrange-discussion/employee-arrange-discussion.component';
import { EmployeeRequestTerminationComponent } from './employee-request-termination/employee-request-termination.component';
import { EmployeeTerminationHistoryComponent } from './employee-termination-history/employee-termination-history.component';
import { EmployeeTerminationRequestsComponent } from './employee-termination-requests/employee-termination-requests.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes:Routes=[
  {
    path:'',
    component:TerminationComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerminationComponent, EmployeeAddTerminationRecordComponent, EmployeeArrangeDiscussionComponent, EmployeeRequestTerminationComponent, EmployeeTerminationHistoryComponent, EmployeeTerminationRequestsComponent]
     
})
export class TerminationModule { }
