import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Stock from 'src/app/shared/models/stock';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-stocks',
  templateUrl: './dashboard-stocks.component.html',
  styleUrls: ['./dashboard-stocks.component.scss']
})
export class DashboardStocksComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllStocks();
  }

  async fetchAllStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStocks();

    console.log(this.stocks);
  }

  fetchStocksToday() {
    this.router.navigate(['dashboard']);
  }

}
