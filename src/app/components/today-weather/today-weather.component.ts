import { Component, Input, OnInit } from '@angular/core';
import { ITodayWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent implements OnInit {

  @Input() todayWeather!: ITodayWeather;

  constructor() { }

  ngOnInit(): void {
  }

  getWindDestination(deg: number): string{
    if((0 <= deg && deg <= 15) || (345 <= deg && deg <= 360)) {
      return 'север';
    }
    if(75 <= deg && deg <= 105) {
      return 'восток';
    }
    if(165 <= deg && deg <= 195) {
      return 'юг';
    }
    if(255 <= deg && deg <= 285) {
      return 'запад';
    }
    if(15 < deg && deg < 75) {
      return 'северо-восток';
    }
    if(105 < deg && deg < 165) {
      return 'юго-восток';
    }
    if(195 < deg && deg < 255) {
      return 'юго-запад';
    }
    if(285 < deg && deg < 345) {
      return 'северо-запад';
    }
    return `ошибка`;
  }

  getImg(imgId: string): string {
    return `http://openweathermap.com/img/wn/${imgId}@2x.png`;
  }

  getTemperature(temp: number): number {
    return Math.round(temp);
  }

  getDate(time: number): string {
    let todayDate = new Date(time * 1000);
    let month = todayDate.getMonth() + 1;
    let day = todayDate.getDate();
    if (month < 10) {
      if (day < 10) {
        return `0${day}.0${month}.${todayDate.getFullYear()}`;
      }
      return `${day}.0${month}.${todayDate.getFullYear()}`;
    }
    if (day < 10) {
      return `0${day}.${month}.${todayDate.getFullYear()}`;
    }
    return `${day}.${month}.${todayDate.getFullYear()}`;
  }

  calculateSunriseSunset(time: number): string{
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(hours < 10) {
      if(minutes < 10) {
        return `0${hours}:0${minutes}`
      }
      return `0${hours}:${minutes}`
    }
    if(minutes < 10) {
      return `${hours}:0${minutes}`
    }
    return `${hours}:${minutes}`;
  }

  calculateSunriseDuration(time: number): string{
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    if(hours < 10) {
      if(minutes < 10) {
        return `0${hours}:0${minutes}`
      }
      return `0${hours}:${minutes}`
    }
    if(minutes < 10) {
      return `${hours}:0${minutes}`
    }
    return `${hours}:${minutes}`;
  }

}
