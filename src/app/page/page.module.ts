import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PageModule { }
