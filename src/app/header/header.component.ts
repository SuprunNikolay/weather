import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css'],
  providers: [AppService]
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService) {
  }
  clickSearchCity(newCity){
    this.appService.cityChose(newCity.value);
  }

    ngOnInit() {};

  };

