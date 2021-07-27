# PROFILE PANEL  
The expandable panel displays more information about the row that has been expanded. This panel has two columns. Column one displays static information about the line item and column two displays the activites associated with this particular line item.

## CORE 
At it's core 'profile-panel' is a [card](https://material.angular.io/components/card/overview) Angular Material component.


## LEGACY
Code that didn't make the cut.  

### The Old Header  
The header of the profile panel. Esentially the header of a simple [card](https://material.angular.io/components/card/overview).  
```html  

  <mat-card-header>
    <!-- <div mat-card-avatar class="example-header-image"></div> -->
    <mat-card-title
      ><span [matBadge]="status" matBadgeOverlap="false"
        >{{firstName}} {{lastName}}</span
      ></mat-card-title
    >
    <mat-card-subtitle>{{description}}</mat-card-subtitle>

    <!-- BUTTON: EDIT THIS LEAD -->
    <mat-card-subtitle>
      <button class="core-link-btn" mat-button (click)="editLead()">
        [Edit Lead Information]
      </button>
    </mat-card-subtitle>
  </mat-card-header>

```  

### The Old Activity Feed  
Originally a [List](https://material.angular.io/components/list/overview).
```html  

<mat-list class="activities-list" role="list" style="overflow-y: scroll; height: 300px;">
  <mat-list-item style="height: 90px;" role="listitem" *ngFor="let activity of activities;  let i = index">
    
    <app-profile-activity
      [activityDate]="activities[i].activityDate"
      [activityTime]="activities[i].activityTime"
      [activityTitle]="activities[i].activityTitle"
      [activityOutcome]="activities[i].activityOutcome"
      [activityType]="activities[i].activityType"
    ></app-profile-activity>
  
  </mat-list-item>
</mat-list>

```  

--- 
**Author**: Elwood Berry - 'me@elwoodberry.com'  
This code is brought to you by Elwood Berry @www.elwoodberry.com.  
> Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved. Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 