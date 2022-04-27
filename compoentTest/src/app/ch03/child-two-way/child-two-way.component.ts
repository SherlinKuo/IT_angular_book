import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two-way',
  templateUrl: './child-two-way.component.html',
  styleUrls: ['./child-two-way.component.scss']
})
export class ChildTwoWayComponent implements OnInit {

  constructor() { }

  counter = 0;
  ngOnInit(): void {
  }

  addition(){
    this.counter += 1;
  }

}
