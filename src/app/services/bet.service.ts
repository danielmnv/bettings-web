import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Bet, BetId } from '../interfaces/bet';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  public items: Observable<BetId []>;
  private item: Observable<Bet>;
  private betCollection: AngularFirestoreCollection<Bet>;

  constructor(private authService: AuthService, private afs: AngularFirestore, private snack: MatSnackBar) {
    // Get Bets Collection.
    this.betCollection = this.afs.collection<Bet>('bets');
  }

  findBets(_uid: string): void {
    // Store bets data on items and sort.
    this.items = this.betCollection.snapshotChanges().pipe(map(
      actions => actions.map(a => {
        const data = a.payload.doc.data() as Bet;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
      .sort((betA: Bet, betB: Bet) => (betA.createDate < betB.createDate) ? 1 : -1)
    ));
  }

  async addBet(_bet: Bet): Promise<any> {
    // Upload alert.
    Swal.fire({
      title: 'Guardando apuesta',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    // Get the current user with an observable.
    await this.authService.currentUser.subscribe(user => _bet.uid = user.uid);

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

  updateBet(_doc: string, _status: number, _profit: number): Promise<void> {
    // Update object into Firebase.
    return this.betCollection.doc(_doc).update({ status: _status, profit: _profit});
  }

  sortBets(sorter: string): void {
    // Sort array with attribute.
    this.items = this.items.pipe(map((bets: BetId[]) => bets.sort((betA, betB) => {
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
