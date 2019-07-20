import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bet-panel',
  templateUrl: './bet-panel.component.html',
  styleUrls: ['./bet-panel.component.css']
})
export class BetPanelComponent implements OnInit {

  @Input() bet;

  constructor() { }

  ngOnInit() {
  }

}
