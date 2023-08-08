import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../../workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
})
export class PushComponent implements OnInit {
  pushForm = this.fb.group({
    'upper-chest': ['', [Validators.required]],
    'middle-chest': ['', [Validators.required]],
    'lower-chest': ['', [Validators.required]],
    triceps1: ['', [Validators.required]],
    triceps2: ['', [Validators.required]],
    'front-delt': ['', [Validators.required]],
    'side-delt': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  generateHandler(pushForm: FormGroup) {
    if (pushForm.invalid) {
      return alert('All exercises must be selected');
    }

    this.workoutService.create('push', pushForm.value).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/workouts']);
    });
  }

  onClickVideoHandler() {
    //
  }
}
