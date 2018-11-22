import { NgModule } from '@angular/core';

import {
  MatTableModule,
  MatButtonModule,
   MatFormFieldModule, 
   MatInputModule, 
   MatRippleModule,
    MatPaginatorModule, 
    MatCheckboxModule, 
    MatRadioModule,   
    MatIconModule} from '@angular/material';
    import {MatTabsModule} from '@angular/material/tabs';
    import {MatStepperModule} from '@angular/material/stepper';
    
import { FlatpickrModule } from 'angularx-flatpickr';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [    
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatTabsModule,
    MatStepperModule,
    FlatpickrModule.forRoot()
    
  ],
  exports: [
    
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatStepperModule,
    FlatpickrModule
  ],
  declarations: []
})
export class MaterialModuleModule { }
