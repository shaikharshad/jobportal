import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermandconditionRoutingModule } from './termandcondition-routing.module';
import { TermandconditionComponent } from './termandcondition.component';


@NgModule({
  declarations: [
    TermandconditionComponent
  ],
  imports: [
    CommonModule,
    TermandconditionRoutingModule
  ]
})
export class TermandconditionModule { }
