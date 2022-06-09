import { Component, OnInit } from '@angular/core';
import { IFiveDayWeather, ITodayWeather } from './shared/model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todayWeather!: ITodayWeather;
  fiveDayWeather!: IFiveDayWeather;

  getTodayWeather(weather: ITodayWeather){
    this.todayWeather = weather;
  }

  getFiveDayWeather(weather: IFiveDayWeather){
    this.fiveDayWeather = weather;
  }

}
