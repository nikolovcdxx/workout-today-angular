import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLegsComponent } from './edit-legs.component';

describe('EditLegsComponent', () => {
  let component: EditLegsComponent;
  let fixture: ComponentFixture<EditLegsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLegsComponent]
    });
    fixture = TestBed.createComponent(EditLegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
