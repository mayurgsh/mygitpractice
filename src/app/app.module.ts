import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { FromEventComponent } from './from-event/from-event.component';
import { TimerintervalComponent } from './timerinterval/timerinterval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { CustomeobservableComponent } from './customeobservable/customeobservable.component';
import { MapComponent } from './map/map.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    TimerintervalComponent,
    OfFromComponent,
    CustomeobservableComponent,
    MapComponent,
    MergemapComponent,
    ConcatmapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
