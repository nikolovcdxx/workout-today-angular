import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPushComponent } from './edit-push.component';

describe('EditPushComponent', () => {
  let component: EditPushComponent;
  let fixture: ComponentFixture<EditPushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPushComponent]
    });
    fixture = TestBed.createComponent(EditPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
