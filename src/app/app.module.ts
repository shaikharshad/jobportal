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
import { PostDetailsComponent } from './collection/post-details/post-details.component';
import { SideWallComponent } from './collection/side-wall/side-wall.component';
import { FooterComponent } from './collection/footer/footer.component';
import { MegabhartiComponent } from './collection/megabharti/megabharti.component';
import { HallticketsComponent } from './collection/halltickets/halltickets.component';
import { ExamesComponent } from './collection/exames/exames.component';
import { ResultsComponent } from './collection/results/results.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MainWallComponent,
    AdminloginComponent,
    PostDetailsComponent,
    SideWallComponent,
    FooterComponent,
    MegabhartiComponent,
    HallticketsComponent,
    ExamesComponent,
    ResultsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
