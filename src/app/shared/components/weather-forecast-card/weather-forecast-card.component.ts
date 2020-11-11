import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-forecast-card',
  templateUrl: './weather-forecast-card.component.html',
  styleUrls: ['./weather-forecast-card.component.scss']
})
export class WeatherForecastCardComponent implements OnInit {
  @Input() public date: string;
  @Input() public hour: string;
  @Input() public icon: string;
  @Input() public weatherDescription: string;
  @Input() public tempMin: string;
  @Input() public tempMax: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getDayOfWeek() {
    if (this.date === undefined) return;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(parseFloat(this.date));

    //console.log(date)
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return `${days[date.getDay()].substr(0, 3)} ${date.getDay()} ${month[date.getMonth()].substr(0, 3)}`;
  }

  getHour() {
    if (this.hour === undefined) return;
    let date = new Date(this.hour);
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes;
  }
}
