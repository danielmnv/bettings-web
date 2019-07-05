import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponents } from './material.module';
import { HousesComponent } from './components/houses/houses.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { CapitalComponent } from './components/capital/capital.component';
import { BankComponent } from './components/bank/bank.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HomeComponent,
    HistoryComponent,
    CapitalComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
