import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermandconditionComponent } from './termandcondition.component';

const routes: Routes = [{ path: '', component: TermandconditionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermandconditionRoutingModule { }
