import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

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
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['leadName', 'leadEmail', 'leadSource', 'leadSalesRep'];
  expandedElement: Lead | null;

  constructor() {}

  ngOnInit() {}
}

export interface Lead {
  leadPosition: number;
  leadName: string;
  leadEmail: string;
  leadSource: string;
  leadSalesRep: string;
}

const ELEMENT_DATA: Lead[] = [
  {
    leadPosition: 1, // ID
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 2,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 3,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 4,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 5,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 6,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 7,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 8,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 9,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  },
  {
    leadPosition: 10,
    leadName: 'Michael Richards', // Name
    leadEmail: 'email@email.com', // Email
    leadSource: 'Lead Source Goes Here', // Lead leadSource
    leadSalesRep: `Sales Rep Name Goes Here` // Sales Rep
  }
];
