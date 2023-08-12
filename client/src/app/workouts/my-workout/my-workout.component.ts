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
    if (history.state.id) {
      this.getWorkout(history.state.id, '');
    } else {
      this.getWorkout('', this.userId);
    }
  }

  getWorkout(workoutId: string, userId: string) {
    if (userId === '') {
      this.workoutService.getOne(this.workoutId).subscribe((workout) => {
        this.workout = workout;
        console.log(this.workout);
      });
    }

    if (workoutId === '') {
      this.workoutService.getAll().subscribe((workouts) =>{
        this.workout = workouts.find(x => x.owner === userId) 
        console.log(this.workout);
      })
    }
  }
}
