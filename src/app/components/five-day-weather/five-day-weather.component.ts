import { Component, Input, OnInit } from '@angular/core';
import { IFiveDayWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-five-day-weather',
  templateUrl: './five-day-weather.component.html',
  styleUrls: ['./five-day-weather.component.scss']
})
export class FiveDayWeatherComponent implements OnInit {


  @Input() fiveDayWeather!: IFiveDayWeather;

  fiveDayWeatherList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getFiveDaysList(this.fiveDayWeather.list);
  }

  getFiveDaysList(list: any): void {
    console.log(list);
    let fiveDayWeatherList = [];
    // for(let i = 0; list.length; i++) {
    //   if(list[i].dt_txt.includes('00:00:00')){
    //     fiveDayWeatherList.push(list[i]);
    //     break;
    //   }
    // }
    fiveDayWeatherList.push(list[0]);
    let listOfFiveDays = [];
    for(let i = 0; i < list.length; i++) {
      if(list[i].dt_txt.includes('15:00:00')){
        listOfFiveDays.push(list[i]);
      }
    }
    let currentDate = new Date();
    if(currentDate.getHours() < 18) {
      listOfFiveDays.shift();
    } else {
      listOfFiveDays.pop();
    }
    this.fiveDayWeatherList = fiveDayWeatherList.concat(listOfFiveDays);
    console.log(this.fiveDayWeatherList);
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

}
