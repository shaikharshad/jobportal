import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
import { MaterialModule } from '../material/material.module'


@NgModule({
  declarations: [
    AdminLoginComponent,
    
  ],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    MaterialModule
  ]
})
export class AdminLoginModule { }
