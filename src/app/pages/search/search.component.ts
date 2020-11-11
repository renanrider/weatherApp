import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {WeatherService} from "../../providers/weather.service";
import {WeatherModel} from "../../weather.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchTerm: string;
  public cities: Array<WeatherModel> = [];
  public isFetching = false;
  public fetchError = false;


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  async searchCity() {
    this.isFetching = true;
    this.fetchError = false;
    if (this.searchTerm === undefined) return this.fetchError = true;
    this.isFetching = true;
    this.fetchError = false;
    this.weatherService.fetchCity(this.searchTerm)
      .subscribe(cities => {
        this.cities = cities.list;
        this.isFetching = false;
        this.fetchError = this.cities.length === 0;
        console.log(this.fetchError)
      }, error => {
        this.isFetching = false;
        this.fetchError = true;
      })
  }

  getFlag(country: string) {
    if (country !== undefined) return `https://www.countryflags.io/${country}/flat/16.png`
  }

  getIcon(iconId: string) {
    if (iconId !== undefined) return `https://openweathermap.org/img/w/${iconId}.png`
  }
}
