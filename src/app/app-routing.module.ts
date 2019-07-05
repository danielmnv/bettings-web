import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { HousesComponent } from './components/houses/houses.component';
import { CapitalComponent } from './components/capital/capital.component';
import { BankComponent } from './components/bank/bank.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'bank', component: BankComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
