import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceLetterComponent } from './experience-letter.component';
import { ExpLetterViewHistoryComponent } from './exp-letter-view-history/exp-letter-view-history.component';
import { ExpLetterRequestHistoryComponent } from './exp-letter-request-history/exp-letter-request-history.component';
import { GenerateExperienceLetterComponent } from './generate-experience-letter/generate-experience-letter.component';
import { RequestExperienceLetterComponent } from './request-experience-letter/request-experience-letter.component';
import { ExperienceLetterTemplateComponent } from './generate-experience-letter/Model/experience-letter-template/experience-letter-template.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes: Routes = [
  {
    path: '',
    component: ExperienceLetterComponent,
    children:[
      {
        path: 'viewAllHistory',
        component: ExpLetterRequestHistoryComponent
      },
      {
        path: 'individualHistory',
        component: ExpLetterViewHistoryComponent
      },
      {
        path: 'generateLetter',
        component: GenerateExperienceLetterComponent
      },
      {
        path: 'requestLetter',
        component: RequestExperienceLetterComponent
      },
    ]

  }
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ExperienceLetterComponent,
    ExpLetterViewHistoryComponent,
    ExpLetterRequestHistoryComponent,
    GenerateExperienceLetterComponent,
    RequestExperienceLetterComponent,
    ExperienceLetterTemplateComponent]
})
export class ExperienceLetterModule { }
