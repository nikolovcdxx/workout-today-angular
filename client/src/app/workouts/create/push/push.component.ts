import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutCreationService } from '../workout-creation.service';
import { WorkoutService } from '../../workout.service';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
})
export class PushComponent {
  pushForm = this.fb.group({
    'upper-chest': ['', [Validators.required]],
    'middle-chest': ['', [Validators.required]],
    'lower-chest': ['', [Validators.required]],
    triceps1: ['', [Validators.required]],
    triceps2: ['', [Validators.required]],
    'front-delt': ['', [Validators.required]],
    'side-delt': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private creationService: WorkoutCreationService,
    private workoutService: WorkoutService
  ) {}


  generateHandler(pushForm: FormGroup) {
    
    this.creationService.workoutCreation(pushForm, 'push');
  }

  onClickVideoHandler() {
    //
  }
}
