/*
DATA TABLE: LEADS
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

// INTERFACE
import { Lead } from '../../../interfaces/lead/lead';

// SERVICE
import { LeadsService } from '../../../services/leads/leads.service';

//
@Component({
  selector: 'app-leads-data-table',
  templateUrl: './leads-data-table.component.html',
  styleUrls: ['./leads-data-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})

//
export class LeadsDataTableComponent implements OnInit {
  public leads: string = 'assets/data/data-lead/leads.json';
  public dataSource: Lead[] = [];
  public columnsToDisplay = [
    'firstName',
    'lastName',
    'title',
    'referredBy',
    'status',
    'accountName',
    'phone',
    'email'
  ];
  expandedElement: Lead | null;

  //
  constructor(private json: LeadsService) {
    // JSON: LISTINGS
    json.getData(this.leads).subscribe(result => {
      console.log('Leads Data', result);
      this.dataSource = result;
    });
  } // [end] constructor

  //
  ngOnInit() {}
}
