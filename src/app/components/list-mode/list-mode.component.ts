import { Component, OnInit } from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

// SERVICE
import { LeadsService } from '../../services/leads/leads.service';

@Component({
  selector: 'app-list-mode',
  templateUrl: './list-mode.component.html',
  styleUrls: ['./list-mode.component.css'],
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
export class ListModeComponent implements OnInit {
  // PROPERTIES

  public dataSource = this.listData;
  public leads: string = 'assets/data/data-lead/leads.json';
  public columnsToDisplay = ['Name', 'Email', 'Source', 'Sales Rep'];
  public expandedElement: Lead | null;
  public listData: Lead[];
  constructor(private json: LeadsService) {
    // JSON: LEADS
    json.getData(this.leads).subscribe(result => {
      console.log('List Mode : Leads Data', result);
      this.listData === result;
    });
  }

  ngOnInit() {}
}

export interface Lead {
  leadPosition: number;
  leadName: string;
  leadEmail: string;
  leadSource: string;
  leadSalesRep: string;
}

// const ELEMENT_DATA: Lead[] = [
//   {
//     leadPosition: 1, // ID
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 2,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 3,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 4,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 5,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 6,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 7,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 8,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 9,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   },
//   {
//     leadPosition: 10,
//     leadName: 'John Doe', // Name
//     leadEmail: 'john.doe@email.com', // Email
//     leadSource: 'Miami Conference', // Lead leadSource
//     leadSalesRep: `George Costanza` // Sales Rep
//   }
// ];
