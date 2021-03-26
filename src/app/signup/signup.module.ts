import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { LoginnComponent } from './loginn/loginn.component';


@NgModule({
  declarations: [SignupComponent, LoginnComponent],
  imports: [
    CommonModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
