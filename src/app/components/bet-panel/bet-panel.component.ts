import { Component, OnInit, Input } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { Bet } from 'src/app/interfaces/bet';
import { MatDialog } from '@angular/material/dialog';
import { DefineBetComponent } from '../define-bet/define-bet.component';

@Component({
  selector: 'app-bet-panel',
  templateUrl: './bet-panel.component.html',
  styleUrls: ['./bet-panel.component.css']
})
export class BetPanelComponent implements OnInit {

  @Input() bet: Bet;
  house: Promise<string>;

  constructor(private houseService: HouseService, public dialog: MatDialog) { }

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

}
