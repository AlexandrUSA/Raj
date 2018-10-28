import { Component, OnInit } from '@angular/core';
import { Employee } from '../models';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  protected readonly imagesPath = `/assets/images/avatars/`;
  protected readonly defaultAvatar = `no-avatar.png`;

  employees: Employee[] = [
    {
      avatar: null,
      name: `Мария Шарапова`,
      position: `Главный кондитер`
    },
    {
      avatar: `картинка, которой нетути((`,
      name: `Мария Шарапова`,
      position: `Главный кондитер`
    },
    {
      avatar: 'null',
      name: `Мария Шарапова`,
      position: `Главный кондитер`
    },
    {
      avatar: null,
      name: `Евгений Смирнов`,
      position: `Главный кондитер`
    },
    {
      avatar: null,
      name: `Евгений Смирнов`,
      position: `Главный кондитер`
    },
    {
      avatar: null,
      name: `Евгений Смирнов`,
      position: `Главный кондитер`
    },
    {
      avatar: null,
      name: `Евгений Смирнов`,
      position: `Главный кондитер`
    },
    {
      avatar: null,
      name: `Евгений Смирнов`,
      position: `Главный кондитер`
    },
    {
      avatar: null,
      name: `Евгений Смирнов`,
      position: `Главный кондитер`
    },
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
