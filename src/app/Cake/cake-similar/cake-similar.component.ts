import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/api.service';
import { Card } from '@Shared/shared.model';

@Component({
  selector: 'app-cake-similar',
  templateUrl: './cake-similar.component.html',
  styleUrls: ['./cake-similar.component.scss'],
})
export class CakeSimilarComponent implements OnInit {
  cards: Card[];

  constructor(private api: ApiService) {}

  ngOnInit() {
    // TODO: replace it to real request for similar cakes
    this.cards = this.api.getTopSales();
  }
}
