import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private router: Router) {
    this.router.getCurrentNavigation()?.extras.state;
  }

  workout: Workout | undefined = undefined;

  ngOnInit(): void {
    this.workout = history.state.workout;
    if (this.workout === undefined) {
      this.router.navigate(['not-found'])
    }
    
  }

}
