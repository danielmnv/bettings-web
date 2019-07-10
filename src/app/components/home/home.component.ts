import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NewBetComponent } from '../new-bet/new-bet.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => console.log(error));
  }

  addBet() {
    const dialogRef = this.dialog.open(NewBetComponent, {
      width: '500px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      // this.animal = result;
    });
  }

}
