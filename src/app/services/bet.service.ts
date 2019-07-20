import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Bet } from '../interfaces/bet';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  public items: Observable<Bet []>;
  private betCollection: AngularFirestoreCollection<Bet>;

  constructor(private afs: AngularFirestore, private snack: MatSnackBar) {
    // Get Bets Collection.
    this.betCollection = this.afs.collection<Bet>('bets');
  }

  findBets(_uid: string): void {
    // Store bets data on items.
    this.items = this.betCollection.valueChanges();
  }

  addBet(_bet: Bet): Promise<any> {
    // Upload alert.
    Swal.fire({
      title: 'Guardando apuesta',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    // Push object into Firebase. Return a DocumentReference if true.
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
