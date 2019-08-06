import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BetId } from 'src/app/interfaces/bet';
import { NgForm } from '@angular/forms';
import { BetService } from 'src/app/services/bet.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetProfitPipe } from 'src/app/pipes/get-profit.pipe';

@Component({
  selector: 'app-define-bet',
  templateUrl: './define-bet.component.html',
  styleUrls: ['./define-bet.component.css'],
  providers: [ GetProfitPipe ]
})
export class DefineBetComponent implements OnInit {

  private temp_status: string;
  private temp_profit: number;
  @ViewChild('bProf', { static: true }) profitField: ElementRef;

  constructor(public dialogRef: MatDialogRef<DefineBetComponent>, @Inject(MAT_DIALOG_DATA) public bet: BetId, private pipeProfit: GetProfitPipe, private betService: BetService, private snack: MatSnackBar) {
    this.temp_status = "2";
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
        this.profitField.nativeElement.focus();
      default:
        break;
    }
  }

  updateBet(form: NgForm) {
    if (form.valid) {
      // Upload alert.
      Swal.fire({
        title: 'Determinando apuesta',
        type: 'info',
        allowOutsideClick: false
      });
      Swal.showLoading();

      this.betService.updateBet(this.bet.id, parseInt(this.temp_status), this.temp_profit)
        .then(() => {
          let snackRef = this.snack.open('Apuesta definida', 'Deshacer', { duration: 10000 });
          this.dialogRef.close();
          snackRef.onAction().subscribe(() => {
            this.betService.updateBet(this.bet.id, 1, parseFloat(this.pipeProfit.transform(this.bet.momio >= 0, Math.abs(this.bet.momio), this.bet.amount)));
          });
        })
        .catch(() => this.snack.open('¡Ocurrió un error!', 'Cerrar', { duration: 8000 }))
        .finally(() => Swal.close());
    }
  }

}
