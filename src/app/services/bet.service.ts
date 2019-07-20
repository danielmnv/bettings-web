import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Bet } from '../interfaces/bet';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private betCollection: AngularFirestoreCollection<Bet>;

  constructor(private afs: AngularFirestore, private snack: MatSnackBar) {
    this.betCollection = this.afs.collection<Bet>('bets');
  }

  addBet(_bet: Bet) {
    // Upload alert.
    Swal.fire({
      title: 'Guardando apuesta',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    // Push object into Firebase.
    return this.betCollection.add(_bet)
      .then(res => {
        this.snack.open('Apuesta añadida', 'Cerrar', { duration: 8000 })
        return res;
      })
      .catch(err => {
        this.snack.open(err, 'Cerrar', { duration: 8000 })
        return err;
      })
      .finally(() => Swal.close());
  }
}
