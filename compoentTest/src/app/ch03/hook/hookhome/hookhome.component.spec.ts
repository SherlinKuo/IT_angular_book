import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookhomeComponent } from './hookhome.component';

describe('HookhomeComponent', () => {
  let component: HookhomeComponent;
  let fixture: ComponentFixture<HookhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HookhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
