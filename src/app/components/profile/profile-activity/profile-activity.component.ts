/*
PROFILE: ACTIVITY
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com
*/
import { Component, OnInit, Input } from '@angular/core';

// INTERFACE
import { Lead } from '../../../interfaces/lead/lead';

@Component({
  selector: 'app-profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.scss']
})
export class ProfileActivityComponent implements OnInit {
  // @Input() PROPERTIES.
  @Input() activityDate: Lead;
  @Input() activityTime: Lead;
  @Input() activityTitle: Lead;
  @Input() activityOutcome: Lead;
  @Input() activityType: Lead;

  // CONSTRUCTOR
  constructor() {}

  ngOnInit() {}
}

/*
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com
*/
