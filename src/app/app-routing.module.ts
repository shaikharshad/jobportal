import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './collection/adminlogin/adminlogin.component';
import { FooterComponent } from './collection/footer/footer.component';
import { HeaderComponent } from './collection/header/header.component';
import { MainWallComponent } from './collection/main-wall/main-wall.component';
import { MegabhartiComponent } from './collection/megabharti/megabharti.component';
import { MenuComponent } from './collection/menu/menu.component';
import { PostDetailsComponent } from './collection/post-details/post-details.component';

const routes: Routes = [
{ path : '', component:MainWallComponent},
{ path : 'menu' , component :MenuComponent},
{ path : 'header' ,component: HeaderComponent },
{ path : 'main-wall' ,component: MainWallComponent },
{ path : 'login' ,component: AdminloginComponent },
{ path : 'post-details' , component:PostDetailsComponent,},
{ path : 'post-details/:id' , component:PostDetailsComponent,},

{ path : 'footer' , component:FooterComponent},
{ path: 'aboutus', loadChildren: () => import('./collection/staticpages/aboutus/aboutus.module').then(m => m.AboutusModule) },
{ path: 'contactus', loadChildren: () => import('./collection/staticpages/contactus/contactus.module').then(m => m.ContactusModule) },
{ path: 'privacypolicy', loadChildren: () => import('./collection/staticpages/privacypolicy/privacypolicy.module').then(m => m.PrivacypolicyModule) },
{ path: 'termandcondition', loadChildren: () => import('./collection/staticpages/termandcondition/termandcondition.module').then(m => m.TermandconditionModule) },
{ path : 'megabharti' ,component: MegabhartiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
