import { Component, OnInit } from '@angular/core';



import { Signup } from './signup';
import {SignupService} from './signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private obj:SignupService) { }
  signlist:Signup[]=[]
 

  ngOnInit(): void {
    this.obj.readUser().subscribe(data=>{
      this.signlist= data.map((doc)=>{
    return{
      id:doc.payload.doc.id,
      ...doc.payload.doc.data() as {}
    } as Signup
      })
    })
  }
  
  model=new Signup('','','','')
  

  save(){
    console.log(this.model)
    if(this.model.id==null){
      this.obj.saveUser(this.model)
    }else{
      this.obj.editUser(this.model)
    }
  }

  edit(data:Signup){
    this.model=data
  }
  delete(data:Signup){
    this.obj.deleteUser(data)
  }
}
