import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import { InterviewHistoryComponent } from './interview-history/interview-history.component';
import { AddInterviewHistoryComponent } from './interview-history/add-interview-history/add-interview-history.component';


import { JobRoleTemplateComponent } from './job-role-template/job-role-template.component';
import { PlanVacanciesComponent } from './plan-vacancies/plan-vacancies.component';
import { ViewPlanVacanciesComponent } from './view-plan-vacancies/view-plan-vacancies.component';
import { DeleteViewPlanVacanciesComponent } from './view-plan-vacancies/modal/delete-view-plan-vacancies/delete-view-plan-vacancies.component';
import { EditViewPlanVacanciesComponent } from './view-plan-vacancies/modal/edit-view-plan-vacancies/edit-view-plan-vacancies.component';
import { ViewallViewPlanVacanciesComponent } from './view-plan-vacancies/modal/viewall-view-plan-vacancies/viewall-view-plan-vacancies.component';
import { JobRoleTemplateFormComponent } from './job-role-template/modal/job-role-template-form/job-role-template-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { RecordApplicantCvComponent } from './record-applicant-cv/record-applicant-cv.component';
import { ViewRecordApplicantCvComponent } from './view-record-applicant-cv/view-record-applicant-cv.component';
import { InterviewSelectionComponent } from './interview-selection/interview-selection.component';
import { EditViewRecordApplicantCvComponent } from './view-record-applicant-cv/modal/edit-view-record-applicant-cv/edit-view-record-applicant-cv.component';
import { DeleteViewRecordApplicantCvComponent } from './view-record-applicant-cv/modal/delete-view-record-applicant-cv/delete-view-record-applicant-cv.component';
import { SelectInterviewSelectionComponent } from './interview-selection/modal/select-interview-selection/select-interview-selection.component';
import { RejectInterviewSelectionComponent } from './interview-selection/modal/reject-interview-selection/reject-interview-selection.component';
import { AddInterviewPanelComponent } from './interview-history/add-interview-panel/add-interview-panel.component';
import { ViewInterviewHistoryComponent } from './interview-history/view-interview-history/view-interview-history.component';
import { ViewInterviewPanelComponent } from './interview-history/view-interview-panel/view-interview-panel.component';

const routes:Routes=[
  {
    path:'',
   component:RecruitmentComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecruitmentComponent, 
    InterviewHistoryComponent,
     AddInterviewHistoryComponent,
     JobRoleTemplateComponent,
     PlanVacanciesComponent,
     ViewPlanVacanciesComponent,
     DeleteViewPlanVacanciesComponent,
     EditViewPlanVacanciesComponent,
     ViewallViewPlanVacanciesComponent,
     JobRoleTemplateFormComponent,
     RecordApplicantCvComponent,
     ViewRecordApplicantCvComponent,
     InterviewSelectionComponent,
     EditViewRecordApplicantCvComponent,
     DeleteViewRecordApplicantCvComponent,
     SelectInterviewSelectionComponent,
     RejectInterviewSelectionComponent,
     AddInterviewPanelComponent,
     ViewInterviewHistoryComponent,
     ViewInterviewPanelComponent

    ]
})
export class RecruitmentModule { }
