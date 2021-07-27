import { Component, OnInit, Input } from '@angular/core';

// INTERFACE
import { Lead } from '../../interfaces/lead/lead';

@Component({
  selector: 'app-lead-activity',
  templateUrl: './lead-activity.component.html',
  styleUrls: ['./lead-activity.component.scss']
})
export class LeadActivityComponent implements OnInit {
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
