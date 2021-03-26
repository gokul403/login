import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../signup/loginn/auth.service'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private obj:AuthService,private router:Router) { }

  ngOnInit(): void {
  
  }
  logout(){
    this.obj.Logout()
    this.router.navigate(["/loginn"])

  }

}
