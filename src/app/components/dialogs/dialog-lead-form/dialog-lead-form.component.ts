/*
DIALOG: LEADS
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-lead-form',
  templateUrl: './dialog-lead-form.component.html',
  styleUrls: ['./dialog-lead-form.component.scss']
})
export class DialogLeadFormComponent implements OnInit {
  // ---
  public form: FormGroup;

  // ---
  public firstName: string;
  public lastName: string;
  public title: string;
  public department: string;
  public accountName: string;
  public salesRep: string;
  public email: string;
  public leadSource: string;
  public phone: string;
  public status: string;
  public coporateIdentity: string;
  public description: string;
  public referredBy: string;
  public billingAddress1: string;
  public billingAddress2: string;
  public billingCity: string;
  public billingState: string;
  public billingZip: string;
  public shippingAddress1: string;
  public shippingAddress2: string;
  public shippingCity: string;
  public shippingState: string;
  public shippingZip: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditModeComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.title = data.title;
    this.department = data.department;
    this.accountName = data.accountName;
    this.salesRep = data.salesRep;
    this.email = data.email;
    this.leadSource = data.leadSource;
    this.phone = data.phone;
    this.status = data.status;
    this.coporateIdentity = data.coporateIdentity;
    this.description = data.description;
    this.referredBy = data.referredBy;
    this.billingAddress1 = data.billingAddress1;
    this.billingAddress2 = data.billingAddress2;
    this.billingCity = data.billingCity;
    this.billingState = data.billingState;
    this.billingZip = data.billingZip;
    this.shippingAddress1 = data.shippingAddress1;
    this.shippingAddress2 = data.shippingAddress2;
    this.shippingCity = data.shippingCity;
    this.shippingState = data.shippingState;
    this.shippingZip = data.shippingZip;

    console.log('First Name', this.firstName);
    console.log('Last Name', this.lastName);
  }

  ngOnInit() {
    // this.form = fb.group({description: [description, []]});
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
  // ---
}
