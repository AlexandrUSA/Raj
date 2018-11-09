import { Component, OnInit } from '@angular/core';
import { Reviewer } from '../home.model';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  protected readonly imagesPath = `/assets/images/avatars/`;
  protected readonly defaultAvatar = `no-avatar.png`;

  reviewers: Reviewer[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.reviewers = this.api.getReviewers();
  }

  imgErrorHandler(event): void {
    event.srcElement.src = this.getAvatar();
  }

  getAvatar(name?: string): string {
    return name ? this.imagesPath + name : this.imagesPath + this.defaultAvatar;
  }
}
