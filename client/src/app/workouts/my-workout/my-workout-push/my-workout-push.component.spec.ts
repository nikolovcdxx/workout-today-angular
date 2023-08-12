import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutPushComponent } from './my-workout-push.component';

describe('MyWorkoutPushComponent', () => {
  let component: MyWorkoutPushComponent;
  let fixture: ComponentFixture<MyWorkoutPushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorkoutPushComponent]
    });
    fixture = TestBed.createComponent(MyWorkoutPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
