import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['../app.component.css']
})
export class WeatherTodayComponent implements OnInit {

  today = Date.now();
  chosenCity: string;
  tempNow: number;
  weatherType: string;
  weatherImage: string;
  preassureNow: number;
  humidityNow:number;
  windspeedNow: number;
  cloudsNow: number;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getToday()
      .subscribe(data => {
        this.chosenCity = data.name;
        this.tempNow = (data.main.temp).toFixed(0);
        this.weatherType = data.weather[0].description;
        this.weatherImage= "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
        this.preassureNow = data.main.pressure;
        this.humidityNow = data.main.humidity;
        this.windspeedNow = data.wind.speed;
        this.cloudsNow = data.clouds.all;
      });
  };
}
