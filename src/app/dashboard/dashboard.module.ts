import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { MatIconModule } from '@angular/material/icon';
import { StocksComponent } from './stocks/stocks.component';
import { DashboardStocksComponent } from './dashboard-stocks/dashboard-stocks.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
    StocksComponent,
    DashboardStocksComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    DashboardPageComponent,
    HttpClientModule,
  ]
})
export class DashboardModule { }
