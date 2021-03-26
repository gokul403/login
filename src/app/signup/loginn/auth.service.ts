import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  Logout(){
    localStorage.setItem("isLogged","false")
    localStorage.removeItem("username")
  }
}

