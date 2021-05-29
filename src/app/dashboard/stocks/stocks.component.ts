import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  @Input()
  stock = new Stock();

  constructor() { }

  ngOnInit(): void {
  }

  get variation() : string {
    const localizedVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';

    return `${prefix} ${localizedVariationString.replace('-', '')}%`;
  }
}
