import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkoutService } from '../../workout.service';
import { Router } from '@angular/router';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-edit-push',
  templateUrl: './edit-push.component.html',
  styleUrls: ['./edit-push.component.css'],
})
export class EditPushComponent implements OnInit {
  @Input() workout: Workout | undefined;

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pushForm.setValue({
      'upper-chest': this.workout?.exercises['upper-chest'],
      'middle-chest': this.workout?.exercises['middle-chest'],
      'lower-chest': this.workout?.exercises['lower-chest'],
      triceps1: this.workout?.exercises.triceps1,
      triceps2: this.workout?.exercises.triceps2,
      'front-delt': this.workout?.exercises['front-delt'],
      'side-delt': this.workout?.exercises['side-delt'],
    });
  }

  pushForm = this.fb.group({
    'upper-chest': [''],
    'middle-chest': [''],
    'lower-chest': [''],
    triceps1: [''],
    triceps2: [''],
    'front-delt': [''],
    'side-delt': [''],
  });

  editHandler(pushForm: FormGroup) {
    this.workoutService
      .edit(
        this.workout!._id,
        this.workout!.type,
        pushForm.value,
        this.workout!.ownerName
      )
      .subscribe(() => this.router.navigate(['/workouts/my-workout']));
  }

  onClickVideoHandler() {
    //
  }
}
