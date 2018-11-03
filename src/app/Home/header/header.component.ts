import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {Basket} from '../home.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  phone = '+375449874556';

  basket: Basket[] = [
    {
      title: `Импортные шорты`,
      price: 25000
    },
    {
      title: `Лабутены нижне-тагильские`,
      price: 700000
    }
  ];

  get amount () {
    return this.basket.reduce((sum, item) => sum + item.price, 0);
  }

  isMenuOpen: boolean;

  constructor(public modal: NgxSmartModalService) { }

  ngOnInit () { }

}
