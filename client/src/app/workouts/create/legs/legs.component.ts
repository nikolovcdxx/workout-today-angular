import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutCreationService } from '../workout-creation.service';

@Component({
  selector: 'app-legs',
  templateUrl: './legs.component.html',
  styleUrls: ['./legs.component.css'],
})
export class LegsComponent {
  legsForm = this.fb.group({
    'quadriceps1': ['', [Validators.required]],
    'quadriceps2': ['', [Validators.required]],
    'hamstrings': ['', [Validators.required]],
    'glutes1': ['', [Validators.required]],
    'glutes2': ['', [Validators.required]],
    'calves': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private creationService: WorkoutCreationService
  ) {}


  generateHandler(legsForm: FormGroup) {
    this.creationService.workoutCreation(legsForm, 'legs');
  }


  onClickVideoHandler() {
    //
  }
}
