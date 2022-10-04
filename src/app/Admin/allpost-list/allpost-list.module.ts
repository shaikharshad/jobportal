import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllpostListRoutingModule } from './allpost-list-routing.module';
import { AllpostListComponent } from './allpost-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    AllpostListComponent
  ],
  imports: [
    CommonModule,
    AllpostListRoutingModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class AllpostListModule { }
