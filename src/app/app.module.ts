import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { TodayWeatherComponent } from './components/today-weather/today-weather.component';
import { FiveDayWeatherComponent } from './components/five-day-weather/five-day-weather.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodayWeatherComponent,
    FiveDayWeatherComponent,
    HourlyWeatherComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
