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
    console.log('Edit Lead Has Been Clicked.');

    const dialogConfig = new MatDialogConfig();
    // const dialogRef = this.dialog.open(EditModeComponent, dialogConfig);

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      firstName: this.firstName,
      lastName: this.lastName,
      title: this.title,
      department: this.department,
      accountName: this.accountName,
      salesRep: this.salesRep,
      email: this.email,
      leadSource: this.leadSource,
      phone: this.phone,
      status: this.status,
      coporateIdentity: this.coporateIdentity,
      description: this.description,
      referredBy: this.referredBy,
      billingAddress1: this.billingAddress1,
      billingAddress2: this.billingAddress2,
      billingCity: this.billingCity,
      billingState: this.billingState,
      billingZip: this.billingZip,
      shippingAddress1: this.shippingAddress1,
      shippingAddress2: this.shippingAddress2,
      shippingCity: this.shippingCity,
      shippingState: this.shippingState,
      shippingZip: this.shippingZip
    };

    console.log('Shipping Zip', this.shippingZip);
    this.dialog.open(EditModeComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
