import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParConfigComponent } from './parEntries/par-config/par-config.component';
import { ParFilterComponent } from './parEntries/par-filter/par-filter.component';
import { ParScheduleFormComponent } from './parEntries/par-schedule-form/par-schedule-form.component';
import { ParHomeComponent } from './par-home.component';
import {RouterModule,Routes} from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { ParFilterTableComponent } from './parEntries/par-filter-table/par-filter-table.component';
import { ParTemplateComponent } from './parEntries/par-template/par-template.component';
import { RatingStarCompComponent } from './parEntries/rating-star-comp/rating-star-comp.component';
import { ParHistoryComponent } from './parViews/par-history/par-history.component';
import { TrackParComponent } from './parViews/track-par/track-par.component';
import { ParReviewOutComesComponent } from './parEntries/par-review-out-comes/par-review-out-comes.component';
import { ParConfigTableComponent } from './parEntries/par-config-table/par-config-table.component';


const routes:Routes=[
  {
    path:'',
    component:ParHomeComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ParConfigComponent,
     ParFilterComponent, 
     ParScheduleFormComponent, 
     ParHomeComponent, 
     ParFilterTableComponent, 
     ParTemplateComponent, 
     RatingStarCompComponent,
      ParHistoryComponent,
      TrackParComponent,
      ParReviewOutComesComponent,
      ParConfigTableComponent
     ]
})
export class ParModule { }
