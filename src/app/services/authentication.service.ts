import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, of, switchMap } from 'rxjs';
import { UserForLogin } from '../models/UserForLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly currentUser$  = authState(this.auth)
  
  constructor(private auth:Auth) { }

  login(userForLoginModel:UserForLogin){
    return from(signInWithEmailAndPassword(this.auth,userForLoginModel.email,userForLoginModel.password))
  }

  
  logout(){
    return from(this.auth.signOut())
  }
}
