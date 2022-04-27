import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  @Input() A! : number; // 父元件輸入的資料
  @Output() AChange = new EventEmitter<number>(); // 雙向綁定命名限制:屬性+Change

  constructor(@Attribute('color') public color: string) { }

  ngOnInit(): void {
  }

  getA(){
    console.log(`A : ${this.A}`);
    this.AChange.emit(this.A);

  }

  addition(){
    this.A += 1;
    this.AChange.emit(this.A);
  }
}
