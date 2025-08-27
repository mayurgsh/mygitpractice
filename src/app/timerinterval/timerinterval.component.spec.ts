import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerintervalComponent } from './timerinterval.component';

describe('TimerintervalComponent', () => {
  let component: TimerintervalComponent;
  let fixture: ComponentFixture<TimerintervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerintervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerintervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
