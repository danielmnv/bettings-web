// Angular
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Sweet Alert 2

// Ngx LoadingBar

// Ng2 Charts

// Animate

// Components
import { AppComponent } from './app.component';
import { MaterialComponents } from './material.module';
import { HousesComponent } from './components/houses/houses.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { CapitalComponent } from './components/capital/capital.component';
import { BankComponent } from './components/bank/bank.component';

// Services
import { AuthService } from './services/auth.service';

// Environments
import { environment } from 'src/environments/environment';

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
    MaterialComponents,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
