import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})

export class HeaderComponent implements OnInit {
  newCity = '';
  constructor(private appService: AppService) {
  }
  clickSearchCity(newCity){
    this.appService.cityChose(newCity);
    newCity = '';
    console.log(newCity)

  }


    ngOnInit() {

    }

  }
