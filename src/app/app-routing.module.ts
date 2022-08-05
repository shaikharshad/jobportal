import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './collection/header/header.component';
import { MainWallComponent } from './collection/main-wall/main-wall.component';
import { MenuComponent } from './collection/menu/menu.component';

const routes: Routes = [

{ path : 'menu' , component :MenuComponent},
{ path : 'header' ,component: HeaderComponent },
{ path : 'main-wall' ,component: MainWallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
