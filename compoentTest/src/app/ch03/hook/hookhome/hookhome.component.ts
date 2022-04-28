import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hookhome',
  templateUrl: './hookhome.component.html',
  styleUrls: ['./hookhome.component.scss']
})
export class HookhomeComponent implements OnInit {

  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }


  add(){
    this.counter += 1;
  }
}
