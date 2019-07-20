// Angular
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

// Sweet Alert 2

// Ngx LoadingBar

// Ngx Material TimePicker
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

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
import { NewBetComponent } from './components/new-bet/new-bet.component';

// Services
import { AuthService } from './services/auth.service';

// Pipes
import { GetProfitPipe } from './pipes/get-profit.pipe';

// Environments
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HomeComponent,
    HistoryComponent,
    CapitalComponent,
    BankComponent,
    NewBetComponent,
    GetProfitPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialComponents,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    AngularFirestore,
    AuthService
  ],
  entryComponents: [
    NewBetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
