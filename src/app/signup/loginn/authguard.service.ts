
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(snapshot:ActivatedRouteSnapshot,
  Router:RouterStateSnapshot):boolean{
    if(this.isLoggedIn()){
      return true

    }
    this.router.navigate(["/loginn"])
    return false
  }

  isLoggedIn(){
    let status=false
    if(localStorage.getItem("isLoggedIn")=="true"){
      status=true

    }
    else{
      status=false
    }
    return status
  }
}
