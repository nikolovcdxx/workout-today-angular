import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  workout: Workout | undefined;

  isLiked: boolean = false;
  isUser: string | null = localStorage.getItem('auth');
  userId: string = '';

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
      this.isUser === null
        ? (this.isLiked = true)
        : (this.userId = JSON.parse(this.isUser)._id);
      this.isLiked = workout.likedBy.includes(this.userId);
    });
  }

  likeHandler() {
    if (this.workout) {
      this.workoutService.like(this.workout._id, this.userId).subscribe(() => {
        this.isLiked = true;
        this.workout?.likedBy.push(this.userId);
      });
      this.router.navigate([`/workouts/details/${this.workout._id}`]);
    }
  }
}
