import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './collection/adminlogin/adminlogin.component';
import { HeaderComponent } from './collection/header/header.component';
import { MainWallComponent } from './collection/main-wall/main-wall.component';
import { MenuComponent } from './collection/menu/menu.component';

const routes: Routes = [

{ path : 'menu' , component :MenuComponent},
{ path : 'header' ,component: HeaderComponent },
{ path : 'main-wall' ,component: MainWallComponent },
{ path : 'login' ,component: AdminloginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
