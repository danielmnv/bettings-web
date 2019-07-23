import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Bet } from '../interfaces/bet';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    // Store bets data on items and sort.
    this.items = this.betCollection.valueChanges().pipe(map((bets: Bet[]) => bets.sort((betA, betB) => (betA.createDate < betB.createDate) ? 1 : -1)));
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

  sortBets(sorter: string): void {
    // Sort array with attribute.
    this.items = this.items.pipe(map((bets: Bet[]) => bets.sort((betA, betB) => {
      switch (sorter) {
        case 'momio':
          return (betB.momio - betA.momio);
        case 'amount':
          return (betB.amount - betA.amount);
        case 'profit':
          return (betB.profit - betA.profit);
        case 'eventDate':
          return (betA.eventDate < betB.eventDate) ? 1 : -1;
        default:
          return (betA.createDate < betB.createDate) ? 1 : -1;
      }
    })));
  }
}
