import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hookhome',
  templateUrl: './hookhome.component.html',
  styleUrls: ['./hookhome.component.scss']
})
export class HookhomeComponent implements OnInit, DoCheck, OnChanges {

  counter = 0;
  constructor() { }

  // 因無 @Input 所以不會觸發 ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngOnInit(): void {
  }


  add(){
    this.counter += 1;
  }
}
