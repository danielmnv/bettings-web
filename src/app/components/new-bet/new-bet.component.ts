import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GetProfitPipe } from 'src/app/pipes/get-profit.pipe';
import { firestore } from 'firebase';
import { Bet } from 'src/app/interfaces/bet';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { splitAtColon } from '@angular/compiler/src/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.component.html',
  styleUrls: ['./new-bet.component.css'],
  providers: [ GetProfitPipe ]
})
export class NewBetComponent implements OnInit {
  
  private momio: number;
  private amount: number;
  private momioSign: boolean = true;
  private newBetForm: FormGroup;
  private betCollection: AngularFirestoreCollection<Bet>

  constructor(public dialogRef: MatDialogRef<NewBetComponent>, private formBuilder: FormBuilder, private pipeProfit: GetProfitPipe, private afs: AngularFirestore, private snack: MatSnackBar) {
    // Bet form builder.
    this.newBetForm = this.formBuilder.group({
      sportCtrl: ['', Validators.required],
      houseCtrl: ['', Validators.required],
      team1Ctrl: ['', Validators.required],
      team2Ctrl: ['', Validators.required],
      typeCtrl: ['', Validators.required],
      momioCtrl: ['', Validators.required],
      amountCtrl: ['', Validators.required],
      eventDateCtrl: ['', Validators.required],
      timeDateCtrl: ['', Validators.required]
    });

    // Bets collection.
    this.betCollection = this.afs.collection<Bet>('bets');
  }

  ngOnInit() {
    
  }

  addBetAndClose() {
    // Split time input to get Hours and Seconds.
    let times = splitAtColon(this.newBetForm.controls.timeDateCtrl.value, [':']);
    // Define date object with current input.
    let date = new Date(this.newBetForm.controls.eventDateCtrl.value);
    // Add Hours and Seconds to the previous created date.
    date.setHours(+times[0]);
    date.setMinutes(+times[1]);

    // Upload alert.
    Swal.fire({
      title: 'Guardando apuesta',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    // Set a new Bet object.
    let newBet: Bet = {
      sport: this.newBetForm.controls.sportCtrl.value,
      fk_house: this.newBetForm.controls.houseCtrl.value,
      team1: this.newBetForm.controls.team1Ctrl.value,
      team2: this.newBetForm.controls.team2Ctrl.value,
      type: this.newBetForm.controls.typeCtrl.value,
      eventDate: firestore.Timestamp.fromDate(date),
      createDate: firestore.Timestamp.fromDate(new Date()),
      momio: (this.momioSign)? this.momio : -this.momio,
      amount: this.amount,
      profit: this.pipeProfit.transform(this.momioSign, this.momio, this.amount),
      status: 1
    };

    // Push object into Firebase.
    this.betCollection.add(newBet)
      .then(res => this.snack.open('Apuesta añadida', 'Cerrar', { duration: 8000 }))
      .catch(err => this.snack.open(err, 'Cerrar', { duration: 8000 }))
      .finally(() => Swal.close());
  }

}
