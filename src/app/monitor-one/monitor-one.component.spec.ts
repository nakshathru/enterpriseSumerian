import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorOneComponent } from './monitor-one.component';

describe('MonitorOneComponent', () => {
  let component: MonitorOneComponent;
  let fixture: ComponentFixture<MonitorOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
