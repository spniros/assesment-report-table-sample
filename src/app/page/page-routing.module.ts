import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent,
    // canActivate: [AuthGuard],
    data: ['signin']
},
{
  path: 'signup',
  component: SignupComponent,
  data: ['signup']
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
