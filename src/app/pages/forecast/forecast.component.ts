import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "../../providers/weather.service";
import {WeatherModel} from "../../weather.model";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public searchTerm: string;
  public days: Array<WeatherModel> = [];
  public isFetching = true;
  public fetchError = false;
  public isFetchingCurrentWeather = true;
  public fetchErrorCurrentWeather = false;
  public currentCity: Array<any> = [];
  private cityId: string;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      this.cityId = this.route.snapshot.paramMap.get('id');
    }
    this.load();
    this.getCurrentWeather();

  }

  load() {
    if (this.cityId !== undefined) {
      this.weatherService.weatherForecast(this.cityId)
        .subscribe(city => {
          this.days = city.list;
          this.isFetching = false;
          this.fetchError = false;

          if (this.days.length === 0) {
            this.fetchError = true;
          }

        }, error => {
          this.isFetching = false;
          this.fetchError = true;
        })
    }
  }

  getCurrentWeather() {
    if (this.cityId !== undefined) {
      this.weatherService.currentWeather(this.cityId)
        .subscribe(data => {
          console.log(data)
          this.currentCity = data;
          this.isFetchingCurrentWeather = false;
          this.fetchErrorCurrentWeather = false;

          if (this.currentCity.length === 0) {
            this.fetchError = true;
          }

        }, error => {
          this.isFetchingCurrentWeather = false;
          this.fetchErrorCurrentWeather = true;
        })
    }
  }

  getIcon(iconId: string) {
    if (iconId !== undefined) return `https://openweathermap.org/img/w/${iconId}.png`
  }

  getHour(hour: string) {
    if (hour === undefined) return;
    let date = new Date(hour);
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes;
  }
}
