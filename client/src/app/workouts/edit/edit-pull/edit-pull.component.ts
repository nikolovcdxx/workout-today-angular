import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Workout } from 'src/app/types/workout';
import { WorkoutService } from '../../workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pull',
  templateUrl: './edit-pull.component.html',
  styleUrls: ['./edit-pull.component.css'],
})
export class EditPullComponent implements OnInit {
  @Input() workout: Workout | undefined;;

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pullForm.setValue({
      'upper-back1': this.workout?.exercises['upper-back1'],
      'upper-back2': this.workout?.exercises['upper-back2'],
      lats1: this.workout?.exercises.lats1,
      lats2: this.workout?.exercises.lats2,
      biceps1: this.workout?.exercises.biceps1,
      biceps2: this.workout?.exercises.biceps2,
      'rear-delt': this.workout?.exercises['rear-delt'],
    });
  }

  pullForm = this.fb.group({
    'upper-back1': [''],
    'upper-back2': [''],
    lats1: [''],
    lats2: [''],
    biceps1: [''],
    biceps2: [''],
    'rear-delt': [''],
  });

  editHandler(pullForm: FormGroup) {
    this.workoutService
      .edit(
        this.workout!._id,
        this.workout!.type,
        pullForm.value,
        this.workout!.ownerName
      )
      .subscribe(() => this.router.navigate(['/workouts/my-workout']));
  }

  onClickVideoHandler() {
    //
  }
}
