import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostListComponent } from './allpost-list.component';

const routes: Routes = [{ path: '', component: AllpostListComponent  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllpostListRoutingModule { }
