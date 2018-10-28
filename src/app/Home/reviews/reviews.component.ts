import { Component, OnInit } from '@angular/core';
import { Reviewer } from '../models';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  protected readonly imagesPath = `/assets/images/avatars/`;
  protected readonly defaultAvatar = `no-avatar.png`;

  reviewers: Reviewer[] = [
    {
      name: `Сергей Зверев`,
      avatar: null,
      msisdn: `+375299635874`,
      review: `Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore. Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage. Chillwave craft beer tote bag stumptown quinoa.`,
      social: [
        {
          type: `Vkontakte`,
          link: `www.vk.com/pasha`
        },
        {
          type: `Instagram`,
          link: `www.insta.com/pasha`
        }
      ]
    },
    {
      name: `Алексей Громыко`,
      avatar: null,
      msisdn: `+375299635874`,
      review: `Fixie tote bag ethnic keytar. Neutra vinyl American Apparel kale chips tofu art party, cardigan raw denim quinoa. Cray paleo tattooed, Truffaut skateboard street art PBR jean shorts Shoreditch farm-to-table Austin.`,
      social: [
        {
          type: `Vkontakte`,
          link: `www.vk.com/alex`
        }
      ]
    },
    {
      name: `Оксана Старовойтова`,
      avatar: null,
      msisdn: `+375299635874`,
      review: `Keytar McSweeney's Williamsburg, readymade leggings try-hard 90's street art letterpress hoodie occupy Wes Anderson Banksy. Asymmetrical viral letterpress, McSweeney's seitan 3 wolf moon drinking vinegar sartorial.`,
      social: [
        {
          type: `Vkontakte`,
          link: `www.vk.com/pasha`
        }
      ]
    },
    {
      name: `Екатерина Толмач`,
      avatar: null,
      msisdn: `+375299635874`,
      review: `Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats..`,
      social: [
        {
          type: `Facebook`,
          link: `www.fb.com/pasha`
        },
        {
          type: `Instagram`,
          link: `www.insta.com/pasha`
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

  imgErrorHandler (event): void {
    event.srcElement.src = this.getAvatar();
  }

  getAvatar (name?: string): string {
    return name ? this.imagesPath + name : this.imagesPath + this.defaultAvatar;
  }

}
