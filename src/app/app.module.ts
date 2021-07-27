/*
APPLICATION COMPONENT: LEADS MANAGEMENT
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// COMPONENTS
import { AppComponent } from './app.component';

// COMPONENTS: LEADS MANAGEMENT
import { LeadsDataTableComponent } from './components/leads/leads-data-table/leads-data-table.component';

// COMPONENTS: PROFILE
import { ProfilePanelComponent } from './components/profile/profile-panel/profile-panel.component';
import { ProfileInfoComponent } from './components/profile/profile-info/profile-info.component';
import { ProfileActivityComponent } from './components/profile/profile-activity/profile-activity.component';

// SERVICES
import { LeadsService } from './services/leads/leads.service';
import { LeadActivityComponent } from './components/lead-activity/lead-activity.component';
import { LeadInfoComponent } from './components/lead-info/lead-info.component';
// import { AddActivityComponent } from './components/add-activity/add-activity.component';

// COMPONENTS: DIALOGS
import { DialogLeadFormComponent } from './components/dialogs/dialog-lead-form/dialog-lead-form.component';
import { DialogActivityFormComponent } from './components/dialogs/dialog-activity-form/dialog-activity-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialLibraryModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    // StaticModeComponent,
    // EditModeComponent,
    // ListModeComponent,
    LeadActivityComponent,
    LeadInfoComponent,
    // AddActivityComponent,
    DialogLeadFormComponent,
    DialogActivityFormComponent,
    ProfilePanelComponent,
    LeadsDataTableComponent,
    ProfileInfoComponent,
    ProfileActivityComponent
  ],
  bootstrap: [AppComponent],
  providers: [LeadsService]
})
export class AppModule {}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
