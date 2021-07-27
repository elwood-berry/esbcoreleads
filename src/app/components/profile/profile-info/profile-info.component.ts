import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

// DIALOG COMPONENT
import { DialogLeadFormComponent } from '../../dialogs/dialog-lead-form/dialog-lead-form.component';
import { DialogActivityFormComponent } from '../../dialogs/dialog-activity-form/dialog-activity-form.component';

// INTERFACE
import { Lead } from '../../../interfaces/lead/lead';
import { SortStatus } from '../../../interfaces/sort-status/sort-status';
import { SortType } from '../../../interfaces/sort-type/sort-type';
import { SortDate } from '../../../interfaces/sort-date/sort-date';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  // INPUT Properties
  @Input() zip: Lead;
  @Input() leadId: Lead;
  @Input() firstName: Lead;
  @Input() lastName: Lead;
  @Input() title: Lead; // Lead Info
  @Input() department: Lead; // Lead Info
  @Input() accountName: Lead; // Lead Info
  @Input() salesRep: Lead; // Lead Info
  @Input() email: Lead; // Lead Info
  @Input() leadSource: Lead; // Lead Info
  @Input() phone: Lead; // Lead Info
  @Input() status; // status: Lead; Lead Info
  @Input() coporateIdentity: Lead; // Lead Info
  @Input() description: Lead;
  @Input() referredBy: Lead;
  @Input() billingAddress1: Lead; // Lead Info
  @Input() billingAddress2: Lead; // Lead Info
  @Input() billingCity: Lead; // Lead Info
  @Input() billingState: Lead; // Lead Info
  @Input() billingZip: Lead; // Lead Info
  @Input() shippingAddress1: Lead; // Lead Info
  @Input() shippingAddress2: Lead; // Lead Info
  @Input() shippingCity: Lead; // Lead Info
  @Input() shippingState: Lead; // Lead Info
  @Input() shippingZip: Lead; // Lead Info
  @Input() activities: any[];
  @Input() activityDate: Lead;
  @Input() activityTime: Lead;
  @Input() activityTitle: Lead;
  @Input() activityOutcome: Lead;
  @Input() activityType: Lead;

  // CONTRUCTOR
  constructor(public dialog: MatDialog) {
    // console.log('Activities', this.activities);
  }

  ngOnInit() {}

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
    this.dialog.open(DialogLeadFormComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}

/*
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com
*/
