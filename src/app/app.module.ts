import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './Home/home.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CakeModule } from '@app/Cake/cake.module';

@NgModule({
  declarations: [AppComponent],
  imports: [HomeModule, CakeModule, BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
