# PROFILE: ACTIVITY 
The expandable panel displays more information about the row that has been expanded. This panel has two columns. Column one displays static information about the line item and column two displays the activites associated with this particular line item.

## CORE 
At it's core 'profile-panel' is an [expansion panel](https://material.angular.io/components/expansion/overview) Angular Material component.


## LEGACY
Code that didn't make the cut.  

### The Old Header  
Inital approach had no way of expanding to see the details of the activity. Moved to an [expansion panel](https://material.angular.io/components/expansion/overview).  
```html  

<div class="lead-activity-container" fxLayout="column">
  <div class="lead-activity-icon">
    <mat-icon aria-hidden="false" aria-label="">phone</mat-icon>
  </div>

  <div class="lead-activity-type">{{activityType}}</div>
  <div class="lead-activity-title">{{activityTitle}}</div>

  <div class="lead-activity-timestamp" fxLayout="row">
    <div class="lead-activity-date">{{activityDate}}</div>
    <div class="lead-activity-time">{{activityTime}}</div>
  </div>

  <div>{{activityOutcome}}</div>

  <button
    class="lead-activity-menu"
    mat-icon-button
    aria-label=""
    [matMenuTriggerFor]="menu"
  >
    <mat-icon>more_vert</mat-icon>
  </button>

  <mat-menu #menu="matMenu">
    <button mat-menu-item>Edit</button>
    <button mat-menu-item>Delete</button>
  </mat-menu>

  <mat-divider></mat-divider>
</div>

```  


--- 
**Author**: Elwood Berry - 'me@elwoodberry.com'  
This code is brought to you by Elwood Berry @www.elwoodberry.com.  
> Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved. Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 