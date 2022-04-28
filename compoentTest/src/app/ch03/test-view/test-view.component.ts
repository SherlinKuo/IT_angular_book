import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss',],
  encapsulation: ViewEncapsulation.None
})
export class TestViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
