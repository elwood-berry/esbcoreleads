/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BaseFormComponent } from './components/base-form/base-form.component';
import { StaticModeComponent } from './components/static-mode/static-mode.component';
import { EditModeComponent } from './components/edit-mode/edit-mode.component';
import { ListModeComponent } from './components/list-mode/list-mode.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialLibraryModule,
    FlexLayoutModule
  ],
  declarations: [AppComponent, BaseFormComponent, StaticModeComponent, EditModeComponent, ListModeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
