import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../material/material.module'
import { MaterialExampleModule } from '../../material/dashboard.module'
import { DashboardMenuListComponent } from './dashboard-menu-list/dashboard-menu-list.component';
import { PostlistComponent } from './postlist/postlist.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMenuListComponent,
    PostlistComponent,
    AdmindashboardComponent,
    ToolbarComponent,
    AddPostComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    MaterialExampleModule

  ]
})
export class DashboardModule { }
