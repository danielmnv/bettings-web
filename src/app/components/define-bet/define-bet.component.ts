import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bet } from 'src/app/interfaces/bet';

@Component({
  selector: 'app-define-bet',
  templateUrl: './define-bet.component.html',
  styleUrls: ['./define-bet.component.css']
})
export class DefineBetComponent implements OnInit {

  private temp_status: string;
  private temp_profit: number;

  constructor(public dialogRef: MatDialogRef<DefineBetComponent>, @Inject(MAT_DIALOG_DATA) public bet: Bet) {
    bet.status = 2;
    this.temp_status = bet.status.toString();
    this.temp_profit = bet.profit;
  }

  ngOnInit() {
  }

  setProfit() {
    switch (+this.temp_status) {
      case 2:
        this.temp_profit = this.bet.profit;
        break;
      case 3:
        this.temp_profit = this.bet.amount;
        break;
      case 4:
        this.temp_profit = 0;
        break;
      case 5:
        this.temp_profit = this.bet.profit / 2 + this.bet.amount / 2;
        break;
      case 6:
        this.temp_profit = this.bet.profit / 2;
        break;
      case 7:
        this.temp_profit = this.bet.amount / 2;
        break;
      case 8:
        this.temp_profit = null;
      default:
        break;
    }
  }

}
