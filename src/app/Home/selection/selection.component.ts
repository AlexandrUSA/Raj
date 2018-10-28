import { Component, OnInit } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  cardItems: Card[] = [
    {
      title: 'Детские торты',
      color: '#D8E9FA'
    },
    {
      title: 'Свадебные торты',
      color: '#DBD8FA'
    },
    {
      title: 'Праздничные торты',
      color: '#D8FAF1'
    },
    {
      title: 'На день рождения',
      color: '#EFFAD8'
    },
    {
      title: 'Candy bar и пироженные',
      color: '#FAD8DE'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
