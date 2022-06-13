import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FiveDayWeatherComponent} from "./components/five-day-weather/five-day-weather.component";
import {TodayWeatherComponent} from "./components/today-weather/today-weather.component";
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: 'today-weather', pathMatch: 'full'},
  { path: 'today-weather', component: TodayWeatherComponent},
  { path: 'five-day-weather', component: TodayWeatherComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
