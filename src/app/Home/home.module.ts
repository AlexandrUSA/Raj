import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { SelectionComponent } from './selection/selection.component';
import { TopSalesComponent } from './top-sales/top-sales.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    SelectionComponent,
    TopSalesComponent,
    WhyUsComponent,
    ReviewsComponent,
    OurTeamComponent,
    DocumentsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
  ],
  providers: []
})
export class HomeModule { }
