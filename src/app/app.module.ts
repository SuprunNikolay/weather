import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { Forecast16Component } from './forecast-16/forecast-16.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherTodayComponent,
    Forecast16Component
  ],
  imports: [
    BrowserModule, Angular2FontawesomeModule, AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
