import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() public cityName: string;
  @Input() public temp: string;
  @Input() public tempMin: string;
  @Input() public tempMax: string;
  @Input() public icon: string;
  @Input() public weatherDescription: string;
  @Input() public flag: string;
  @Input() public country: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
