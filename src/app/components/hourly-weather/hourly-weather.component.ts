import { Component, Input, OnInit } from '@angular/core';
import { IFiveDayWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {


  @Input() fiveDayWeather!: IFiveDayWeather;
  constructor() { }

  ngOnInit(): void {
  }

}
