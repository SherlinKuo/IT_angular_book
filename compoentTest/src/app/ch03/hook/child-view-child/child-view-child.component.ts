import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view-child',
  templateUrl: './child-view-child.component.html',
  styleUrls: ['./child-view-child.component.scss']
})
export class ChildViewChildComponent implements OnInit,DoCheck {

  counter = 0;
  constructor() { }
  ngDoCheck(): void {
    console.log("child-view-DoCheck");
  }

  ngOnInit(): void {
  }


  add(){
    this.counter += 1;
  }
}
