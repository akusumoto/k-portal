import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAnswerComponent } from './event-answer.component';

describe('EventAnswerComponent', () => {
  let component: EventAnswerComponent;
  let fixture: ComponentFixture<EventAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
