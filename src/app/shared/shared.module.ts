import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipes
import { CopeckaPipe } from './pipes/copecka.pipe';
import { MsisdnPipe } from './pipes/msisdn.pipe';

// Components
import { CakeListComponent } from './components/cake-list/cake-list.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CopeckaPipe,
    MsisdnPipe,
    CakeListComponent,
    AppMenuComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule,
    RouterModule,
    MsisdnPipe,
    CopeckaPipe,
    CakeListComponent,
    AppMenuComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
})
export class SharedModule {}
