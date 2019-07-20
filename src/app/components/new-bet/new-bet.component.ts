import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GetProfitPipe } from 'src/app/pipes/get-profit.pipe';
import { firestore } from 'firebase';
import { Bet } from 'src/app/interfaces/bet';
import { splitAtColon } from '@angular/compiler/src/util';
import { BetService } from 'src/app/services/bet.service';

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

  constructor(public dialogRef: MatDialogRef<NewBetComponent>, private formBuilder: FormBuilder, private pipeProfit: GetProfitPipe, private betService: BetService) {
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

    // Set a new Bet object.
    let newBet: Bet = {
      sport: this.newBetForm.controls.sportCtrl.value,
      fk_house: firestore().doc(`houses/${this.newBetForm.controls.houseCtrl.value}`),
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

    // Sent to Bet Service.
    this.betService.addBet(newBet)
      .then(response => {
        if (response instanceof firestore.DocumentReference)
          this.dialogRef.close();
      });

    
  }

}
