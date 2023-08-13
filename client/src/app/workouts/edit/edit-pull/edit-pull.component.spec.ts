import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPullComponent } from './edit-pull.component';

describe('EditPullComponent', () => {
  let component: EditPullComponent;
  let fixture: ComponentFixture<EditPullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPullComponent]
    });
    fixture = TestBed.createComponent(EditPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
