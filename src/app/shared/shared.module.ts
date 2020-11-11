import {NgModule} from '@angular/core';
import {WeatherCardComponent} from "./components/weather-card/weather-card.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { WeatherForecastCardComponent } from './components/weather-forecast-card/weather-forecast-card.component';

@NgModule({
  declarations: [
    WeatherCardComponent,
    WeatherForecastCardComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    WeatherCardComponent,
    WeatherForecastCardComponent
  ],
  entryComponents: []
})
export class SharedModule {

}
