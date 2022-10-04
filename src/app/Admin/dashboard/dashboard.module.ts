import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../material/material.module'
import { MaterialExampleModule } from '../../material/dashboard.module'
import { DashboardMenuListComponent } from './dashboard-menu-list/dashboard-menu-list.component';
import { PostlistComponent } from './postlist/postlist.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMenuListComponent,
    PostlistComponent,
    AdmindashboardComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

  ]
})
export class DashboardModule { }
