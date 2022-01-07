import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelComponent } from './components/panel/panel.component';
import { PostingListComponent } from './components/posting-list/posting-list.component';


import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
import { PostingAddComponent } from './components/posting-add/posting-add.component';

const redirectToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectToPanel = () => redirectLoggedInTo(["panel"])

const routes: Routes = [
  {path:'',component:PostingListComponent},

  {path:'login',...canActivate(redirectToPanel),component:LoginComponent},

  {path:'panel',...canActivate(redirectToLogin),component:PanelComponent},
  
  {path:'posting/add',...canActivate(redirectToLogin),component:PostingAddComponent},

  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
