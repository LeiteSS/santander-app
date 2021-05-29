import { DashboardStocksComponent } from './dashboard/dashboard-stocks/dashboard-stocks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { StocksComponent } from './dashboard/stocks/stocks.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: 'stocks', component: DashboardStocksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
