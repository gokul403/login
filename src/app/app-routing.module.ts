import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AuthguardService } from './signup/loginn/authguard.service';
import { LoginnComponent } from './signup/loginn/loginn.component';


const routes: Routes = [{ path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
{path:'loginn',component:LoginnComponent},
{path:'content',component:ContentComponent,
canActivate:[AuthguardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
