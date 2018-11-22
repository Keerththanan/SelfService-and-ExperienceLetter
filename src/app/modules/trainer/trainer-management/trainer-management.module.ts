import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerManagementComponent } from './trainer-management.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AvailabilityComponent } from './availability/availability.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AvailabilityFormComponent } from './availability-form/availability-form.component';
import {RouterModule,Routes} from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes:Routes=[
  {
    path:'',
    component:TrainerManagementComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrainerManagementComponent, PaymentHistoryComponent, AvailabilityComponent, PaymentFormComponent, AvailabilityFormComponent]
})
export class TrainerManagementModule { }
