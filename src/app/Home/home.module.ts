import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {SharedModule} from '../shared/shared.module';

// Components
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SelectionComponent } from './selection/selection.component';
import { TopSalesComponent } from './top-sales/top-sales.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { DocumentsComponent } from './documents/documents.component';
import { FooterComponent } from './footer/footer.component';
import { AppMenuComponent } from './shared/app-menu/app-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    SelectionComponent,
    TopSalesComponent,
    WhyUsComponent,
    ReviewsComponent,
    OurTeamComponent,
    DocumentsComponent,
    FooterComponent,
    AppMenuComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: []
})
export class HomeModule { }
