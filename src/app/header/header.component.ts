import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickSearchCity(){
    alert('work');
  }
  keyupSearchCity(event){
    if(event.keyCode=='13') {
      alert('work');
    }
  }
}
