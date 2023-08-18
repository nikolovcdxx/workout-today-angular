import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkoutService } from '../../workout.service';
import { Router } from '@angular/router';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-edit-legs',
  templateUrl: './edit-legs.component.html',
  styleUrls: ['./edit-legs.component.css'],
})
export class EditLegsComponent implements OnInit {
  @Input() workout: Workout | undefined;;

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.legsForm.setValue({
      quadriceps1: this.workout?.exercises.quadriceps1,
      quadriceps2: this.workout?.exercises.quadriceps2,
      hamstrings: this.workout?.exercises.hamstrings,
      glutes1: this.workout?.exercises.glutes1,
      glutes2: this.workout?.exercises.glutes2,
      calves: this.workout?.exercises.calves,
    });
  }

  legsForm = this.fb.group({
    quadriceps1: [''],
    quadriceps2: [''],
    hamstrings: [''],
    glutes1: [''],
    glutes2: [''],
    calves: [''],
  });

  editHandler(legsForm: FormGroup) {
    //
    this.workoutService
      .edit(
        this.workout!._id,
        this.workout!.type,
        legsForm.value,
        this.workout!.ownerName
      )
      .subscribe(() => this.router.navigate(['/workouts/my-workout']));
  }

  onClickVideoHandler() {
    //
  }
}
