import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  signWithGoogle() {
    return this.afAuth.auth.setPersistence(auth.Auth.Persistence.SESSION)
      .then(() => this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()))
      .catch(error => error);
  }
}
