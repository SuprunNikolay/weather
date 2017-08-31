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
  result = this.temp;

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

  ngOnInit() {
    this.appService.getDaily()
      .subscribe(data => {
        data.list.forEach((value) => {
          this.temp.push({
            name: new Date(value.dt*1000),
            value: value.temp.max
          });
        });
      });
  }



}
