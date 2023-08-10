import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private workoutService: WorkoutService
  ) {}

  workout: Workout | undefined;

  ngOnInit(): void {
    this.getWorkout();
  }

  usernameCap = (u: string) => {
    return u.charAt(0).toUpperCase() + u.slice(1);
  };

  get ownerName(): string {
    const u = this.workout?.ownerName || '';
    return this.usernameCap(u);
  }

  getWorkout() {
    let workoutId: string = this.activatedRoute.snapshot.params['workoutId'];
    this.workoutService.getOne(workoutId).subscribe((workout) => {
      this.workout = workout;
      console.log(this.workout);
    });
  }
}
