import { Component, OnInit } from '@angular/core';
import { DescriptionCard } from '@Shared/shared.models';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent implements OnInit {
  cards: DescriptionCard[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.cards = this.api.getWhyUsExplain();
  }
}
