import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from '../types/workout';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Workout[]>('/api/data/workouts');
  }

  getOne(id: string) {
    return this.http.get<Workout>(`/api/data/workouts/${id}`);
  }

  create(type: string, exercises: any) {
    return this.http.post<Workout>('/api/data/workouts', { type, exercises });
  }

  edit(workoutId: string, type: string, exercises: any, ownerName: string) {
    return this.http.put<Workout>(`/api/data/workouts/${workoutId}`, {
      type,
      exercises,
      ownerName,
    });
  }

  remove(workoutId: string) {
    return this.http.delete<Workout>(`/api/data/workouts/${workoutId}`);
  }
}
