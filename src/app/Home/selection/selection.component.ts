import { Component, OnInit } from '@angular/core';
import { Card } from '@Shared/shared.models';
import { HomeService } from '../home.service';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  cardItems: Card[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.cardItems = this.api.getCategories();
  }
}
