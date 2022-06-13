import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IFiveDayWeather, ITodayWeather } from 'src/app/shared/model/weather.model';
import { WeatherService } from 'src/app/shared/service/weather.service';
import {catchError} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cityName: string = 'Минск';

  cityWeather!: ITodayWeather;
  fiveDayWeather!: IFiveDayWeather;
  @Output() sendTodayWeather = new EventEmitter<ITodayWeather>();
  @Output() sendFiveDayWeather = new EventEmitter<IFiveDayWeather>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
    this.getFiveDayForecast();
  }

  getWeather(): void{
    this.weatherService.getWeatherByCityName(this.cityName).subscribe((todayWeather: ITodayWeather) => {
      this.cityWeather = todayWeather;
      this.sendTodayWeather.emit(this.cityWeather);
      console.log(this.cityWeather);
    }),
    catchError(err => {
      console.log(err);
      return [];
    });
  }

  getFiveDayForecast(): void {
    this.weatherService.getFiveDayWeatherByCityName(this.cityName).subscribe((fiveDayWeather: IFiveDayWeather) => {
      this.fiveDayWeather = fiveDayWeather;
      this.sendFiveDayWeather.emit(this.fiveDayWeather);
    }),
      catchError(err => {
        console.log(err);
        return [];
      });
  }

  changeCityName(value: any){
    this.cityName = value.target.value;
  }

  // getFilms(): void {
  //   this.activeSelector(this.selectorValue)
  //   this.filmsService.getFilmsByTitle(this.inputValue, this.selectorValue).subscribe((filmsResponse: IFilmResponse) => {
  //     this.filmsResponse = filmsResponse;
  //     this.films = this.filmsResponse.Search;
  //     this.bringFilms(this.films);
  //   })
  // }

}
