import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPullComponent } from './details-pull.component';

describe('DetailsPullComponent', () => {
  let component: DetailsPullComponent;
  let fixture: ComponentFixture<DetailsPullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPullComponent]
    });
    fixture = TestBed.createComponent(DetailsPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
