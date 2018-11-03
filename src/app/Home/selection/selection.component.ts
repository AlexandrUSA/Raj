import { Component, OnInit } from '@angular/core';
import { Card } from '../home.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  cardItems: Card[] = [];

  constructor( private homeService: HomeService ) { }

  ngOnInit() {
    this.cardItems = this.homeService.getCategories();
  }

}
