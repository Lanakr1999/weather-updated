import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {


  @Input() hourlyWeatherList!: any[];
  constructor() { }

  ngOnInit(): void {
  }

  getImg(imgId: string): string {
    return `http://openweathermap.com/img/wn/${imgId}@2x.png`;
  }

  getTemperature(temp: number): number {
    return Math.round(temp);
  }
  getTime(hour: any): string{
    let time;
    time = hour.dt_txt.split(" ");
    time.shift();
    return time;
  }
}
