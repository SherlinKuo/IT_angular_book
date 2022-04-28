import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-c2',
  templateUrl: './child-c2.component.html',
  styleUrls: ['./child-c2.component.scss']
})
export class ChildC2Component implements OnInit,AfterContentInit, AfterContentChecked {

  @ContentChild('test') testEle!: ElementRef;
  constructor() { }
  ngAfterContentChecked(): void {
    console.log("ngAfterConenChecked :");
    console.log(this.testEle);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterConentInit :");
    console.log(this.testEle);
  }


  ngOnInit(): void {
  }

  changeColor(){
    this.testEle.nativeElement.style.color = 'red';
    // 此動作執行後觸發 homecomponent-ngDoCheck 、 自己 - ngAfterConenChecked
  }

}
