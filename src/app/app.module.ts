/*
APPLICATION NAME GOES HERE
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
import { StaticModeComponent } from './components/static-mode/static-mode.component';
import { EditModeComponent } from './components/edit-mode/edit-mode.component';
import { ListModeComponent } from './components/list-mode/list-mode.component';

// SERVICES
import { LeadsService } from './services/leads/leads.service';

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
    StaticModeComponent,
    EditModeComponent,
    ListModeComponent
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
