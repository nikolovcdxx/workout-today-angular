import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLegsComponent } from './details-legs.component';

describe('DetailsLegsComponent', () => {
  let component: DetailsLegsComponent;
  let fixture: ComponentFixture<DetailsLegsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsLegsComponent]
    });
    fixture = TestBed.createComponent(DetailsLegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
