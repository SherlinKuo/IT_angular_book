import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit, OnChanges {

  @Input() size?: number = 0;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.size){
      console.log(`changes ${JSON.stringify(changes.size)}`);
    }
  }

  ngOnInit(): void {
  }


}
