import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WorkoutCreationService  {
  constructor(private workoutService: WorkoutService, private router: Router) {}
  // currentUserName = JSON.parse(localStorage.getItem('auth')!).username;

  workoutCreation(form: FormGroup, type: string) {
   
    if (form.invalid) {
      return alert('All exercises must be selected');
    }

    // if (this.workoutsList.some((x) => x.ownerName === this.currentUserName)) {
    //   return alert(
    //     'You must delete your previous workout before creating a new one, otherwise you can only watch the videos'
    //   );
    // }

    this.workoutService.create(type, form.value).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/workouts']);
    });
  }
}
