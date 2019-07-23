import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-define-bet',
  templateUrl: './define-bet.component.html',
  styleUrls: ['./define-bet.component.css']
})
export class DefineBetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DefineBetComponent>) { }

  ngOnInit() {
  }

}
