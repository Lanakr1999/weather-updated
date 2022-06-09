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
    for(let i = 0; list.length; i++) {
      if(list[i].dt_txt.includes('00:00:00')){
        fiveDayWeatherList.push(list[i]);
        break;
      }
    }
    let listOfFiveDays = [];
    for(let i = 0; i = list.length; i++) {
      if(list[i].dt_txtincludes('15:00:00')){
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
  }

}
