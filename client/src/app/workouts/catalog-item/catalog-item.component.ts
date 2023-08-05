import { Component, Input } from '@angular/core';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css'],
})
export class CatalogItemComponent {
  @Input() workout: Workout | undefined = undefined;

  isMyWorkout: boolean = false;
  isUser: string | null = localStorage.getItem('auth');

  usernameCap = (u: string) => {
    return u.charAt(0).toUpperCase() + u.slice(1);
  };

  get currentUser(): boolean {
    if (this.isUser === null) {
      return !!this.isMyWorkout;
    } else {
      let user = JSON.parse(this.isUser);
      user = user.username;
      this.isMyWorkout = user === this.workout?.ownerName ? true : false;
      return this.isMyWorkout;
    }
  }

  get username(): string {
    let u = this.workout?.ownerName;
    if (typeof u === 'string') {
      return (u = this.usernameCap(u));
    }
    return '';
  }
}
