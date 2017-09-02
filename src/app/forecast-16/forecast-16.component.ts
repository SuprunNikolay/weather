import { Component, OnInit, NgModule } from '@angular/core';
import { AppService } from '../app.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

interface BarData {
  name: Date;
  value: number;
}

@Component({
  selector: 'app-forecast-16',
  templateUrl: './forecast-16.component.html',
  styleUrls: ['../app.component.css']
})
export class Forecast16Component implements OnInit {

  temp: BarData[] = [];
  humidity: BarData[] = [];
  wind: BarData[] = [];
  result: any = [];
  pressure: BarData[] = [];

  view: any[] = [1000,200];

  // options
  showXAxis = true;
  showGridLines = false;
  showYAxisLabel = false;
  showYAxis = false;



  colorScheme = {
    domain: ['#ffc6d1']
  };

  constructor(private appService: AppService) {

  }
  selectWind() {
    this.wind =
    this.result = this.wind;
    this.colorScheme = {
      domain: ['#F0E68C']
    };
  }
  selectHumidity() {
    this.result = this.humidity;
    this.colorScheme = {
      domain: ['#48D1CC']
    };
  }
  selectTemp() {
    this.result = this.temp;
    this.colorScheme = {
      domain: ['#ffc6d1']
    };
  }
  selectPressure() {
    this.result = this.pressure;
    this.colorScheme = {
      domain: ['#00FA9A']
    };
  }

  ngOnInit() {
    this.appService.getDaily()
      .subscribe(data => {
        this.temp = [];
        this.humidity = [];
        this.wind = [];
        data.list.forEach((value) => {

          this.temp.push({
            'name': new Date(value.dt*1000),
            'value': value.temp.max
          });

          this.humidity.push({
            'name': new Date(value.dt*1000),
            'value': value.humidity
          });

          this.wind.push({
            'name': new Date(value.dt*1000),
            'value': value.speed
          });
          this.pressure.push({
            'name': new Date(value.dt*1000),
            'value': value.pressure
          });
        });


        // console.log(this.temp);
        this.result=this.temp;

      })
  }
}



