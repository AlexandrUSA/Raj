import { Component, OnInit } from '@angular/core';
import { DescriptionCard } from '../home.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {
  cards: DescriptionCard[] = [];

  constructor( private homeService: HomeService ) { }

  ngOnInit() {
    this.cards = this.homeService.getWhyUsExplain();
  }

}
