import { Component, OnInit } from '@angular/core';
import { CakeCard } from '../models';

@Component({
  selector: 'app-top-sales',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.scss']
})
export class TopSalesComponent implements OnInit {

  protected readonly imagesPath = `/assets/images/`;
  protected readonly defaultImage = `no-image.png`;

  cards: CakeCard[] = [
    {
      title: 'Торт корабль',
      price: 500,
      minWeight: 2
    },
    {
      title: 'Торт корабль',
      price: 900,
      minWeight: 3
    },
    {
      title: 'Торт корабль',
      price: 1200,
      minWeight: 1
    },
    {
      title: 'Торт корабль',
      price: 70,
      minWeight: 1
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  getImage(imageSrc: string) {
    const imgPath = imageSrc ? this.imagesPath + imageSrc : this.imagesPath + this.defaultImage;
    return `url(${imgPath})`;
  }
}
