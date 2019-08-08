import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NewBetComponent } from '../new-bet/new-bet.component';
import { BetService } from 'src/app/services/bet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, public dialog: MatDialog, private betService: BetService) { }

  ngOnInit() {
    this.betService.findBets();
  }

  signIn(): void {
    this.authService.signWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => console.log(error));
  }

  addBet(): void {
    this.dialog.open(NewBetComponent, {
      width: '500px'
    });
  }

  setSorter(sorter: string): void {
    this.betService.sortBets(sorter);
  }

}
