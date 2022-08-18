import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  // {path:'',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  // {path:'profile',component:ProfileComponent},
  // {path:'members',component:MembersComponent},
  {path:'profile',component:ProfileComponent},

  {path:'members',component:MembersComponent},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
