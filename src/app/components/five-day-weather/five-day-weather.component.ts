import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IFiveDayWeather } from 'src/app/shared/model/weather.model';
import {catchError} from "rxjs";

@Component({
  selector: 'app-five-day-weather',
  templateUrl: './five-day-weather.component.html',
  styleUrls: ['./five-day-weather.component.scss']
})
export class FiveDayWeatherComponent implements OnInit {


  @Input() fiveDayWeather!: IFiveDayWeather;
  @Output() sendHourlyWeatherList = new EventEmitter<any[]>();


  fiveDayWeatherList: any[] = [];
  hourlyWeatherDaysList: any[] = [];
  hourlyWeather: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getFiveDaysList(this.fiveDayWeather.list);
  }

  getHourlyWeather(fullList: any,list: any, day: any) {
    try {
      let numOfDay = list.indexOf(day);
      let date = list[numOfDay].dt_txt;
      let hoursArr = [];
      date = date.split(" ");
      date = date.shift();
      for (let i = 0; i < fullList.length; i++) {
        if (fullList[i].dt_txt.includes(date) && hoursArr.length < 8) {
          hoursArr.push(fullList[i]);
        }
      }
      if (hoursArr.length < 8) {
        numOfDay = list.indexOf(day) + 1;
        date = list[numOfDay].dt_txt;
        date = date.split(" ");
        date = date.shift();
        for (let i = 0; i < fullList.length; i++) {
          if (fullList[i].dt_txt.includes(date) && hoursArr.length < 8) {
            hoursArr.push(fullList[i]);
          }
        }
      }
      this.hourlyWeather = hoursArr;
      this.sendHourlyWeatherList.emit(this.hourlyWeather);
    }
    catch (err){
      return 0;
    }
    return ;
  }

  getFiveDaysList(list: any): void {
    let fiveDayWeatherList = [];
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
    this.hourlyWeatherDaysList = fiveDayWeatherList.concat(listOfFiveDays);
    // this.hourlyWeatherDaysList.shift();
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
