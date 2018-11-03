import { Component, OnInit } from '@angular/core';
import { CakeCard } from '../home.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-top-sales',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.scss']
})
export class TopSalesComponent implements OnInit {

  protected readonly imagesPath = `/assets/images/`;
  protected readonly defaultImage = `no-image.png`;

  cards: CakeCard[] = [];

  constructor( private homeService: HomeService ) { }

  ngOnInit() {
    this.cards = this.homeService.getTopSales();
  }

  getImage(imageSrc: string) {
    const imgPath = imageSrc ? this.imagesPath + imageSrc : this.imagesPath + this.defaultImage;
    return `url(${imgPath})`;
  }
}
