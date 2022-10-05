import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostListComponent } from '../allpost-list/allpost-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardMenuListComponent } from './dashboard-menu-list/dashboard-menu-list.component';
import { DashboardComponent } from './dashboard.component';
import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [{ path: '', component: DashboardComponent } ,
{ path: 'AllpostList', component: AllpostListComponent },
{ path: 'menulist', component: DashboardMenuListComponent },
{path: 'postlist', component: PostlistComponent } ,
{path: 'newPost', component: AddPostComponent } ,
{path: 'adminDashboard', component: AdmindashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
