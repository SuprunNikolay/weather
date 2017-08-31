import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from "rxjs";

@Injectable()
export class AppService {
  todayForecast = new Subject<any>();
  dailyForecast = new Subject<any>();

  constructor(private http: Http) {
    this.cityChose('London');
  }

  cityChose(city: string): void {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=15851ed41f7939c4d11297627fcba6fb')
      .subscribe(response => {
        this.todayForecast.next(response.json());
      });
    this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=metric&cnt=16' + '&APPID=15851ed41f7939c4d11297627fcba6fb')
      .subscribe(response => {
        this.dailyForecast.next(response.json());
      });
  }

  getDaily() {
    return this.dailyForecast;
  }

  getToday() {
    return this.todayForecast;
  }

}
