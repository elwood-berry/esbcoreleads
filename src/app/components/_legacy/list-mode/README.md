# List Mode 
I want to keep a log of major changes in the component files (css, html, ts, etc.).


## TYPESCRIPT  
Keep track of major shifts in the typescript file.

### LOG: 2021-07-22  
```ts  
/*
DRAFT v.99 : 2021-07-22
*/

// ANGULAR 
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

// INTERFACE
import { Lead } from '../../interfaces/lead/lead';

// SERVICE
import { LeadsService } from '../../services/leads/leads.service';

// COMPONENT
@Component({
  selector: 'app-list-mode',
  styleUrls: ['list-mode.component.css'],
  templateUrl: 'list-mode.component.html',
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
export class ListModeComponent implements OnInit {
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
} // [end] class ListModeComponent

```