import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './collection/menu/menu.component';
import { HeaderComponent } from './collection/header/header.component';
import { MainWallComponent } from './collection/main-wall/main-wall.component';
import { AdminloginComponent } from './collection/adminlogin/adminlogin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MainWallComponent,
    AdminloginComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
