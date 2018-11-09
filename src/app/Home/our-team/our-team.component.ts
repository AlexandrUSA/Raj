import { Component, OnInit } from '@angular/core';
import { Employee } from '../home.model';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
})
export class OurTeamComponent implements OnInit {
  protected readonly imagesPath = `/assets/images/avatars/`;
  protected readonly defaultAvatar = `no-avatar.png`;

  employees: Employee[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.employees = this.api.getEmployees();
  }

  imgErrorHandler(event): void {
    event.srcElement.src = this.getAvatar();
  }

  getAvatar(name?: string): string {
    return name ? this.imagesPath + name : this.imagesPath + this.defaultAvatar;
  }
}
