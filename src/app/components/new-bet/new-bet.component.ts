import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm, FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.component.html',
  styleUrls: ['./new-bet.component.css']
})
export class NewBetComponent implements OnInit {
  
  private momio: number;
  private amount: number;
  private momioSign: boolean = true;
  private newBetForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<NewBetComponent>, private formBuilder: FormBuilder) {
    this.newBetForm = this.formBuilder.group({
      sportCtrl: ['', Validators.required],
      houseCtrl: ['', Validators.required],
      team1Ctrl: ['', Validators.required],
      team2Ctrl: ['', Validators.required],
      typeCtrl: ['', Validators.required],
      eventDateCtrl: ['', Validators.required],
      timeDateCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  addBetAndClose() {
    
  }

}
