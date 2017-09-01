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
  result: any;


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
    this.result = null;
    this.result = this.wind;
    this.colorScheme = {
      domain: ['#ffg731']
    };
  }
  selectHumidity() {
    this.result = [];
    this.result = this.humidity;
    this.colorScheme = {
      domain: ['#ffc771']
    };
  }
  selectTemp() {
    this.result = this.temp;
  }

  ngOnInit() {
    this.appService.getDaily()
      .subscribe(data => {
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
        });


        // console.log(this.temp);
        this.result=this.temp;

      })
  }
}



