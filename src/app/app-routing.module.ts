import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { HousesComponent } from './components/houses/houses.component';
import { CapitalComponent } from './components/capital/capital.component';
import { BankComponent } from './components/bank/bank.component';
import { LoginComponent } from './components/login/login.component';

// Angular Fire Guards
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInTo(['home'])) },
  { path: 'home', component: HomeComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'houses', component: HousesComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'history', component: HistoryComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'capital', component: CapitalComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: 'bank', component: BankComponent, ...canActivate(redirectUnauthorizedTo(['login'])) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
