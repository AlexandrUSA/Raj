import { Component, OnInit } from '@angular/core';
import { CakeTier } from '@app/Cake/cake.model';

@Component({
  selector: 'app-cake-manual',
  templateUrl: './cake-manual.component.html',
  styleUrls: ['./cake-manual.component.scss'],
})
export class CakeManualComponent implements OnInit {
  cakeTiers: CakeTier[] = [];
  phone: string = '+74951353454';
  constructor() {}

  ngOnInit() {
    this.cakeTiers = [
      {
        level: 1,
        persons: 5,
        weight: {
          min: 2,
          max: 4,
        },
      },
      {
        level: 2,
        persons: 10,
        weight: {
          min: 5,
          max: 10,
        },
      },
      {
        level: 3,
        persons: 25,
        weight: {
          min: 15,
          max: 25,
        },
      },
      {
        level: 4,
        persons: 55,
        weight: {
          min: 55,
          max: 80,
        },
      },
      {
        level: 5,
        persons: 100,
        weight: {
          min: 100,
          max: 450,
        },
      },
    ];
  }
}
