import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemunerationComponent } from './remuneration.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';
import {RouterModule,Routes} from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes:Routes=[
  {
    path:'',
    component:RemunerationComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemunerationComponent, SalaryDetailComponent]
})
export class RemunerationModule { }
