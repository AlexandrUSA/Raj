import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
// Home components
import { HomeComponent } from './Home/home.component';
import { HeaderComponent } from './Home/header/header.component';
import { SliderComponent } from './Home/slider/slider.component';
import { SelectionComponent } from './Home/selection/selection.component';
import { TopSalesComponent } from './Home/top-sales/top-sales.component';
import { WhyUsComponent } from './Home/why-us/why-us.component';
import { ReviewsComponent } from './Home/reviews/reviews.component';
import { OurTeamComponent } from './Home/our-team/our-team.component';
import { DocumentsComponent } from './Home/documents/documents.component';
import { FooterComponent } from './Home/footer/footer.component';
import { AppMenuComponent } from './Home/shared/app-menu/app-menu.component';
import { CopeckaPipe } from './shared/pipes/copecka.pipe';
import { MsisdnPipe } from './shared/pipes/msisdn.pipe';

@NgModule({
  declarations: [
    AppComponent,
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
    AppMenuComponent,
    CopeckaPipe,
    MsisdnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
