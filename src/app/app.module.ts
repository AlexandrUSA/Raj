import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './Home/home.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
