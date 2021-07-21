/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component } from '@angular/core';

// SERVICE
import { LeadsService } from './services/leads/leads.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public leads: string = 'assets/data/data-lead/leads.json';

  // CONSTRUCTOR
  constructor(private json: LeadsService) {
    // JSON: LEADS
    json.getData(this.leads).subscribe(result => {
      console.log('Leads Data', result);

      // this.listingCount = result.length; // DEFINE THE LENGHT OF THE ARRAY
      // this.jsonListings = result; // UPDATE PROPERTY
      // console.log('JSON Listings', this.jsonListings);
    });
  }
} // [end] AppComponent

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
