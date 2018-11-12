import { Component, OnInit } from '@angular/core';
import { CakeCard } from '@Shared/shared.model';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-top-sales',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.scss'],
})
export class TopSalesComponent implements OnInit {
  cards: CakeCard[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.cards = this.api.getTopSales();
  }
}
