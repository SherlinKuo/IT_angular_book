import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter: number = 0;
  homeA?: number;
  constructor() { }

  ngOnInit(): void {


  }

  addition(){
    this.counter += 1;
  }

  showA(value: number){
    console.log(`home - A : ${value}`);
    this.homeA = value;
  }


}
