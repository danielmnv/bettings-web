import { Component, OnInit, Input } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { Bet } from 'src/app/interfaces/bet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bet-panel',
  templateUrl: './bet-panel.component.html',
  styleUrls: ['./bet-panel.component.css']
})
export class BetPanelComponent implements OnInit {

  @Input() bet: Bet;
  house: Promise<string>;

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.house = this.houseService.findNameHouse(this.bet.fk_house);
  }

}
