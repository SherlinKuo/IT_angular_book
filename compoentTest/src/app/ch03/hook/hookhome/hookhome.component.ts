import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChildViewChildComponent } from '../child-view-child/child-view-child.component';

@Component({
  selector: 'app-hookhome',
  templateUrl: './hookhome.component.html',
  styleUrls: ['./hookhome.component.scss']
})
export class HookhomeComponent implements OnInit, DoCheck, OnChanges,AfterViewInit,AfterViewChecked {

  @ViewChild(ChildViewChildComponent) childView!: ChildViewChildComponent;
  counter = 0;
  constructor() { }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked: ");
    console.log(this.childView);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: ");
    console.log(this.childView);
  }

  // 因無 @Input 所以不會觸發 ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
  }

  ngDoCheck(): void {
    console.log("hook-DoCheck");
  }

  ngOnInit(): void {
  }

  add(){
    this.counter += 1;
  }

  viewChildAdd(){
    this.childView.add();
  }

}
