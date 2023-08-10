import { TestBed } from '@angular/core/testing';

import { WorkoutCreationService } from './workout-creation.service';

describe('WorkoutCreationService', () => {
  let service: WorkoutCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
