import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutPullComponent } from './my-workout-pull.component';

describe('MyWorkoutPullComponent', () => {
  let component: MyWorkoutPullComponent;
  let fixture: ComponentFixture<MyWorkoutPullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorkoutPullComponent]
    });
    fixture = TestBed.createComponent(MyWorkoutPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
