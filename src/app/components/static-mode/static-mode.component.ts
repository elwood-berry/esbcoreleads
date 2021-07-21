/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditModeComponent } from '../edit-mode/edit-mode.component';

@Component({
  selector: 'app-static-mode',
  templateUrl: './static-mode.component.html',
  styleUrls: ['./static-mode.component.scss']
})
export class StaticModeComponent implements OnInit {
  // CONTRUCTOR
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // ---

  // EDIT LEAD
  public openDialog() {
    const dialogRef = this.dialog.open(EditModeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
