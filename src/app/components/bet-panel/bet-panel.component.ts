import { Component, OnInit, Input } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { Bet, BetId } from 'src/app/interfaces/bet';
import { MatDialog } from '@angular/material/dialog';
import { DefineBetComponent } from '../define-bet/define-bet.component';
import Swal from 'sweetalert2';
import { BetService } from 'src/app/services/bet.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bet-panel',
  templateUrl: './bet-panel.component.html',
  styleUrls: ['./bet-panel.component.css']
})
export class BetPanelComponent implements OnInit {

  @Input() bet: BetId;
  house: Promise<string>;

  constructor(private betService: BetService, private houseService: HouseService, public dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit() {
    this.house = this.houseService.findHouseName(this.bet.fk_house);
  }

  editBet() {

  }

  defineBet() {
    this.dialog.open(DefineBetComponent, {
      width: '400px',
      data: this.bet
    });
  }

  deleteBet() {
    // Set the temporarily data.
    const temp_bet: Bet = this.bet;
    const temp_id: string = this.bet.id;

    // Upload alert.
    Swal.fire({
      title: 'Eliminando apuesta',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    // Delete bet.
    this.betService.removeBet(this.bet.id)
      .then(() => {
        let snackRef = this.snack.open('Apuesta eliminada', 'Deshacer', { duration: 10000 });
        // Undo on snackbar click.
        snackRef.onAction().subscribe(() => {
          this.betService.recoveryBet(temp_id, temp_bet);
        });
      })
      .catch(() => this.snack.open('¡Ocurrió un error!', 'Cerrar', { duration: 8000 }))
      .finally(() => Swal.close());
  }

}
