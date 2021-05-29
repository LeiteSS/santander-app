import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.fetchStocksToday();
  }

  async fetchStocksToday(): Promise<void> {
    this.stocks = await this.dashboardService.getStocksToday();

    console.log(this.stocks);
  }

  fetchAllStocks() {
    this.router.navigate(['stocks']);
  }
}
