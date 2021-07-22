/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EditModeComponent } from '../edit-mode/edit-mode.component';

// INTERFACE
import { Lead } from '../../interfaces/lead/lead';

@Component({
  selector: 'app-static-mode',
  templateUrl: './static-mode.component.html',
  styleUrls: ['./static-mode.component.scss']
})
export class StaticModeComponent implements OnInit {
  // INPUT Properties
  @Input() zip: Lead;
  @Input() leadId: Lead;
  @Input() firstName: Lead;
  @Input() lastName: Lead;
  @Input() title: Lead;
  @Input() department: Lead;
  @Input() accountName: Lead;
  @Input() salesRep: Lead;
  @Input() email: Lead;
  @Input() leadSource: Lead;
  @Input() phone: Lead;
  @Input() status: Lead;
  @Input() coporateIdentity: Lead;
  @Input() description: Lead;
  @Input() referredBy: Lead;
  @Input() billingAddress1: Lead;
  @Input() billingAddress2: Lead;
  @Input() billingCity: Lead;
  @Input() billingState: Lead;
  @Input() billingZip: Lead;
  @Input() shippingAddress1: Lead;
  @Input() shippingAddress2: Lead;
  @Input() shippingCity: Lead;
  @Input() shippingState: Lead;
  @Input() shippingZip: Lead;
  // CONTRUCTOR
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  // ---

  // EDIT LEAD
  public editLead() {
    // 'openDialog'

    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(EditModeComponent, dialogConfig);

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
