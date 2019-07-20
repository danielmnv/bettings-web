import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GetProfitPipe } from 'src/app/pipes/get-profit.pipe';
import { firestore } from 'firebase';
import { Bet } from 'src/app/interfaces/bet';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    this.betCollection = this.afs.collection<Bet>('bets');
  }

  ngOnInit() {

  }

  addBetAndClose() {
    let newBet: Bet = {
      sport: this.newBetForm.controls.sportCtrl.value,
      fk_house: this.newBetForm.controls.houseCtrl.value,
      team1: this.newBetForm.controls.team1Ctrl.value,
      team2: this.newBetForm.controls.team2Ctrl.value,
      type: this.newBetForm.controls.typeCtrl.value,
      eventDate: this.newBetForm.controls.eventDateCtrl.value,
      timeDate: this.newBetForm.controls.timeDateCtrl.value,
      createDate: firestore.Timestamp.fromDate(new Date()),
      momio: this.momio,
      amount: this.amount,
      profit: this.pipeProfit.transform(this.momioSign, this.momio, this.amount),
      status: 1
    }
    this.betCollection.add(newBet)
      .then(res => this.snack.open('Apuesta añadida', 'Cerrar', { duration: 8000 }))
      .catch(err => this.snack.open(err, 'Cerrar', { duration: 8000 }));
  }

}
