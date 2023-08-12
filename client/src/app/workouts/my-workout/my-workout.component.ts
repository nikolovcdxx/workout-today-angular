import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout } from 'src/app/types/workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css'],
})
export class MyWorkoutComponent implements OnInit {
  constructor(private router: Router, private workoutService: WorkoutService) {
    this.router.getCurrentNavigation()?.extras.state;
  }

  workout: Workout | undefined;
  workoutId: string = '';
  userId: string = JSON.parse(localStorage.getItem('auth')!)._id;

  ngOnInit(): void {
    let workoutId = history.state.id;
    if (workoutId) {
      this.getWorkout(workoutId, '');
    } else {
      this.getWorkout('', this.userId);
    }
  }

  getWorkout(workoutId: string, userId: string) {
    if (workoutId) {
      this.workoutService.getOne(workoutId).subscribe((workout) => {
        this.workout = workout;
      });
    }

    if (userId) {
      this.workoutService.getAll().subscribe((workouts) => {
        this.workout = workouts.find((x) => x.owner === userId);
        typeof this.workout?._id === 'string'
          ? (this.workoutId = this.workout._id)
          : '';
      });
    }
  }

  workoutDeleteHandler(workoutId: string) {
    const confirmation = window.confirm('Are you sure you want to delete this workout?');

    if (confirmation) {
      this.workoutService.remove(workoutId)
          .subscribe(() => {
              this.router.navigate(["/workouts"]);
          });
  }
  }
}
