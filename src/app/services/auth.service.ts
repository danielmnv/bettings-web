import { Injectable } from '@angular/core';
import { auth, User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Observable<User>;

  constructor(private afAuth: AngularFireAuth) {
    this.currentUser = afAuth.user;
  }

  signWithGoogle() {
    return this.afAuth.auth.setPersistence(auth.Auth.Persistence.SESSION)
      .then(() => this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()))
      .catch(error => error);
  }
}
