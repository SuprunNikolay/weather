import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['../app.component.css']
})
export class WeatherTodayComponent implements OnInit {

  constructor() { }

  today = Date.now();


  chosenCity = "London, GB";
  tempNow =  27;
  weatherType = "sunny";
  weatherImage = "http://openweathermap.org/img/w/50d.png";
  preassureNow = 1024;
  humidityNow = 41;
  windspeedNow = 1.5;
  cloudsNow = 20;






  ngOnInit() {
  }

}
