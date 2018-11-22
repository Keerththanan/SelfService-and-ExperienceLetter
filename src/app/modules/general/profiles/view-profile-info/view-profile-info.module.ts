import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAcademicQualificationComponent } from './view-academic-qualification/view-academic-qualification.component';
import { ViewAttachmentComponent } from './view-attachment/view-attachment.component';
import { ViewGeneralInfomationComponent } from './view-general-infomation/view-general-infomation.component';
import { ViewProfessionalQualificationComponent } from './view-professional-qualification/view-professional-qualification.component';
import { ViewRecordOfEmploymentComponent } from './view-record-of-employment/view-record-of-employment.component';
import { ViewRefereesComponent } from './view-referees/view-referees.component';
import { ViewProfileInfoComponent } from './view-profile-info.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes: Routes = [
  {
    path: '', component: ViewProfileInfoComponent,
    children: [
      { path: 'generalInfo', component: ViewGeneralInfomationComponent },
      { path: 'academicInfo', component: ViewAcademicQualificationComponent },
      { path: 'professionalQualification', component: ViewProfessionalQualificationComponent },
      { path: 'recordOfEmp', component: ViewRecordOfEmploymentComponent },
      { path: 'referees', component: ViewRefereesComponent },
      { path: 'attachment', component: ViewAttachmentComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ViewAcademicQualificationComponent, 
    ViewAttachmentComponent, 
    ViewGeneralInfomationComponent, 
    ViewProfessionalQualificationComponent, 
    ViewRecordOfEmploymentComponent, 
    ViewRefereesComponent,
    ViewProfileInfoComponent]
})
export class ViewProfileInfoModule { }
