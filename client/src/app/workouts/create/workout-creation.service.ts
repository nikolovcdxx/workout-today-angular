import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { Workout } from 'src/app/types/workout';

@Injectable({
  providedIn: 'root',
})
export class WorkoutCreationService {
  constructor(private workoutService: WorkoutService, private router: Router) {}
  currentUserName = JSON.parse(localStorage.getItem('auth')!).username;

  workoutCreation(form: FormGroup, type: string) {
    if (form.invalid) {
      return alert('All exercises must be selected');
    }

    this.workoutService.getAll().subscribe({
      next: (workouts) => {
        if (workouts.some((x) => x.ownerName === this.currentUserName)) {
          return alert(
            'You must delete your previous workout before creating a new one, otherwise you can only watch the videos'
          );
        } else {
          this.workoutService.create(type, form.value).subscribe(() => {
            this.router.navigate(['/workouts']);
          });
        }
      },
    });
  }
}
