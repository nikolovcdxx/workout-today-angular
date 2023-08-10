import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPushComponent } from './details-push.component';

describe('DetailsPushComponent', () => {
  let component: DetailsPushComponent;
  let fixture: ComponentFixture<DetailsPushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPushComponent]
    });
    fixture = TestBed.createComponent(DetailsPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
