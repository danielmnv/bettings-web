// Angular
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

// Sweet Alert 2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Ngx LoadingBar
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

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
import { BetPanelComponent } from './components/bet-panel/bet-panel.component';
import { DefineBetComponent } from './components/define-bet/define-bet.component';

// Services
import { AuthService } from './services/auth.service';
import { BetService } from './services/bet.service';

// Pipes
import { GetProfitPipe } from './pipes/get-profit.pipe';
import { SportTypePipe } from './pipes/sport-type.pipe';

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
    GetProfitPipe,
    BetPanelComponent,
    SportTypePipe,
    DefineBetComponent
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
    NgxMaterialTimepickerModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AngularFirestore,
    AuthService,
    BetService
  ],
  entryComponents: [
    NewBetComponent,
    DefineBetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
