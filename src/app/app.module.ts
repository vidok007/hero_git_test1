import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { Car2Component } from './car2/car2.component';
import { Car3Component } from './car3/car3.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    Car2Component,
    Car3Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
