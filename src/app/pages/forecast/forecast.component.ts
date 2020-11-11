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
  public days: Array<any> = [];
  public isFetching = true;
  public fetchError = false;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    if (this.route.snapshot.paramMap.has('id')) {
      let id = this.route.snapshot.paramMap.get('id');

      if (id !== undefined) {
        this.weatherService.weatherForecast(id)
          .subscribe(city => {
            this.days = city.list;
            this.isFetching = false;
            this.fetchError = false;

            console.log(this.days)

            if (this.days.length === 0) {
              this.fetchError = true;
            }

          }, error => {
            this.isFetching = false;
            this.fetchError = true;
          })

      }
    }
  }

  getIcon(iconId: string) {
    if (iconId !== undefined) return `https://openweathermap.org/img/w/${iconId}.png`
  }

  searchCity() {

  }
}
