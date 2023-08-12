import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutLegsComponent } from './my-workout-legs.component';

describe('MyWorkoutLegsComponent', () => {
  let component: MyWorkoutLegsComponent;
  let fixture: ComponentFixture<MyWorkoutLegsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorkoutLegsComponent]
    });
    fixture = TestBed.createComponent(MyWorkoutLegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
