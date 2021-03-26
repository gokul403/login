import { Injectable } from '@angular/core';
import { Signup } from './signup';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private store:AngularFirestore) { }
 
    saveUser(signup:Signup){
    console.log(signup)
    this.store.collection("signin").add({...signup})
  }
  readUser(){
    return this.store.collection("signin").snapshotChanges()

  }  
  editUser(model:Signup){
    this.store.doc("signin/"+model.id).update(model)
  }
  deleteUser(model:Signup){
    this.store.doc("signin/"+model.id).delete()
  }
  
}
