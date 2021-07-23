import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lead-info',
  templateUrl: './lead-info.component.html',
  styleUrls: ['./lead-info.component.scss']
})
export class LeadInfoComponent implements OnInit {
  // INPUT Properties
  @Input() title; // Lead Info
  @Input() department; // Lead Info
  @Input() accountName; // Lead Info
  @Input() salesRep; // Lead Info
  @Input() email; // Lead Info
  @Input() leadSource; // Lead Info
  @Input() phone; // Lead Info
  @Input() status; // Lead Info
  @Input() coporateIdentity; // Lead Info
  @Input() billingAddress1; // Lead Info
  @Input() billingAddress2; // Lead Info
  @Input() billingCity; // Lead Info
  @Input() billingState; // Lead Info
  @Input() billingZip; // Lead Info
  @Input() shippingAddress1; // Lead Info
  @Input() shippingAddress2; // Lead Info
  @Input() shippingCity; // Lead Info
  @Input() shippingState; // Lead Info
  @Input() shippingZip; // Lead Info

  constructor() {}

  ngOnInit() {}
}
