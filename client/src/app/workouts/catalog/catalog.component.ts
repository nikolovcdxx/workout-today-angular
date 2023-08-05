import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private workoutService: WorkoutService) {}
  workoutsList: Workout[] = [];

  ngOnInit(): void {
    this.workoutService.getAll().subscribe({
      next: (workouts) => {
        this.workoutsList = workouts;
      },
    });
  }
}
