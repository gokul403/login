import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import {FormsModule} from '@angular/forms';

import { LoginnComponent } from './loginn/loginn.component';


const routes: Routes = [{ path: '', component: SignupComponent },{path:'',component:LoginnComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormsModule]
})
export class SignupRoutingModule { }
