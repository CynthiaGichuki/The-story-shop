import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = true

  getauthStatus():Promise<boolean>{
    const promise = new Promise<boolean>((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.isLoggedIn)
      },10)
    })
    return promise;
  }
  login(){
    this.isLoggedIn=true
  }
  logout(){
    this.isLoggedIn=false
  }
}
