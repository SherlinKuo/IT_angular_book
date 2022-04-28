import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildC2Component } from './child-c2.component';

describe('ChildC2Component', () => {
  let component: ChildC2Component;
  let fixture: ComponentFixture<ChildC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
