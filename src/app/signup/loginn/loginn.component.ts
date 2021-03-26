import { Component, OnInit } from '@angular/core';
import {Loginn} from './loginn';
import {Router} from '@angular/router';
import {SignupService} from '../signup.service';
import {Signup} from '../signup'

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  constructor(private router:Router,private obj:SignupService) { }

  signlist:Signup[]=[]

  ngOnInit(): void {
    this.returnURL="/../content"
    this.obj.readUser().subscribe(data=>{
      this.signlist= data.map((doc)=>{
    return{
      id:doc.payload.doc.id,
      ...doc.payload.doc.data() as {}
    } as Signup
      })
    })
  }
  model=new Loginn('','')
  user:any
  pass:any
  returnURL:string=""
  loginsuccess:string=""
  
  save(){
    this.user=this.model.username
    this.pass=this.model.password
    for(let i of this.signlist)
    {
    
    if(this.user==i.Name && this.pass==i.Password)
    
    {
      this.loginsuccess="true"
      localStorage.setItem("isLoggedIn","true")
      localStorage.setItem("username",this.model.name)
      this.router.navigate([this.returnURL])
    }
  }
  
    if(this.loginsuccess=="false"){
      alert("login failed")
    }
  

  }
}

