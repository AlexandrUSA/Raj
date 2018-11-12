import { Component, Input } from '@angular/core';
import { CakeCard } from '@Shared/shared.model';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss'],
})
export class CakeListComponent {
  @Input() cards: CakeCard[] = [];

  protected readonly imagesPath = `/assets/images/`;
  protected readonly defaultImage = `no-image.png`;

  getImage(imageSrc: string) {
    const imgPath = imageSrc ? this.imagesPath + imageSrc : this.imagesPath + this.defaultImage;
    return `url(${imgPath})`;
  }
}
