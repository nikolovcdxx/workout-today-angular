import { Injectable } from '@angular/core';
import { Workout } from 'src/app/types/workout';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor() {}

  capitalize(exercise: string): string {
    const arr = exercise.split('-');

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const capitalizedEx = arr.join(' ');
    return capitalizedEx;
  }
}
