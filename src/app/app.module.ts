import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ErrorComponent } from './error/error.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    AdduserComponent,
    ErrorComponent,
    ViewuserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
