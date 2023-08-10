import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutCreationService } from '../workout-creation.service';

@Component({
  selector: 'app-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['./pull.component.css'],
})
export class PullComponent {
  pullForm = this.fb.group({
    'upper-back1': ['', [Validators.required]],
    'upper-back2': ['', [Validators.required]],
    'lats1': ['', [Validators.required]],
    'lats2': ['', [Validators.required]],
    'biceps1': ['', [Validators.required]],
    'biceps2': ['', [Validators.required]],
    'rear-delt': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private creationService: WorkoutCreationService
  ) {}

  generateHandler(pullForm: FormGroup) {
    this.creationService.workoutCreation(pullForm, 'pull');
  }

  onClickVideoHandler() {
    //
  }
}
