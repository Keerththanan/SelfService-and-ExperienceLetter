import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseRecordModule } from './modules/trainee/traineeManagement/course-record/course-record.module';


const routes: Routes = [

  {
    path: 'recruitment',
   loadChildren: './modules/employee/recruitment/recruitment.module#RecruitmentModule'
  },
  {
    path: 'profile',
   loadChildren: './modules/general/persons-info/persons-info.module#PersonsInfoModule'
  },
  {
    path: 'selection',
    loadChildren: './modules/general/profiles/add-profile-info/add-profile-info.module#AddProfileInfoModule'
  },
  {
    path: 'remuneration',
    loadChildren: './modules/employee/remuneration/remuneration.module#RemunerationModule'
  },
  {
    path: 'recruitment',
    loadChildren: './modules/employee/recruitment/recruitment.module#RecruitmentModule'
  },

  {
    path: 'leaveManagement',
    loadChildren: './modules/employee/leave-management/leave-management.module#LeaveManagementModule'
  },
  {
    path: 'welfare',
    loadChildren: './modules/employee/welfare-and-motivation/welfare-and-motivation.module#WelfareAndMotivationModule'
  },
  {
    path: 'careerdevelopmentplan',
    loadChildren: './modules/general/career-dev-plan/career-dev-plan.module#CareerDevPlanModule'
  },
  {
    path: 'par',
    loadChildren: './modules/general/par/par.module#ParModule'
  },
  {
    path: 'skilldevelopmentplan',
    loadChildren: './modules/trainee/traineeManagement/skilldevelopmentplan/skilldevelopmentplan.module#SkilldevelopmentplanModule'
  },
  {
    path: 'courserecord',
    loadChildren: './modules/trainee/traineeManagement/course-record/course-record.module#CourseRecordModule'
  },
  {
    path: 'attendance',
    loadChildren: './modules/trainee/traineeManagement/attendance/attendance.module#AttendanceModule'
  },
  {
    path: 'finalassesment',
    loadChildren: './modules/trainee/traineeManagement/finalassesment/finalassesment.module#FinalassesmentModule'
  },
  {
    path: 'termination',
    loadChildren: './modules/trainee/traineeManagement/termination/termination.module#TerminationModule'
  },
  {
    path: 'notifications',
    loadChildren: './modules/trainee/notifications/notifications.module#NotificationsModule'
  },
  {
    path: 'projects',
    loadChildren: './modules/trainee/projects/projects.module#ProjectsModule'
  },
  {
    path: 'assignments',
    loadChildren: './modules/trainee/assignments/assignments.module#AssignmentsModule'
  },
  {
    path: 'intake',
    loadChildren: './modules/trainee/intake/intake.module#IntakeModule'
  },
  {
    path: 'posting',
    loadChildren: './modules/trainee/posting/posting.module#PostingModule'
  },
  {
    path: 'experienceletter',
    loadChildren: './modules/employee/employee-management/experience-letter/experience-letter.module#ExperienceLetterModule'
  },
  {
    path: 'selfservice',
    loadChildren: './modules/general/self-service/self-service.module#SelfServiceModule'
  },
  {
    path: 'schedule',
    loadChildren: './modules/trainee/schedule/schedule.module#ScheduleModule'
  },

  {
    path: 'emptermination',
    loadChildren: './modules/general/termination/termination.module#TerminationModule'
  },
  {
    path: 'trainermanagement',
    loadChildren: './modules/trainer/trainer-management/trainer-management.module#TrainerManagementModule'
  },
  {
    path: 'experienceletter',
    loadChildren: './modules/employee/employee-management/experience-letter/experience-letter.module#ExperienceLetterModule'
  },
  

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
