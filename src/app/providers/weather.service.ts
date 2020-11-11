import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {WeatherModel} from "../weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api = "https://api.openweathermap.org/data/2.5/"

  constructor(private http: HttpClient) {
  }

  // City search
  fetchCity(cityName: String): any {
    return this.http.get(`${this.api}/find?q=${cityName}&units=metric&appId=${environment.appID}`);
  }

  // Current weather
  currentWeather(cityId: String) : any{
    return this.http.get(`${this.api}/weather?id=${cityId}&units=metric&appId=${environment.appID}`);
  }

  // Weather forecast
  weatherForecast(cityId: String) : any{
    return this.http.get(`${this.api}/forecast?id=${cityId}&units=metric&appId=${environment.appID}&cnt=25`);
  }
}
