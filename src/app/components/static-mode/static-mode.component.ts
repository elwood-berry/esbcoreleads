/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {EditModeComponentDialog} from ' from '@angular/material/dialog';';

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
    const dialogRef = this.dialog.open(EditModeComponentDialog); // ContentExampleDialog

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}



// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {}