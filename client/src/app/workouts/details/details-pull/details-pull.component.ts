import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/types/workout';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details-pull',
  templateUrl: './details-pull.component.html',
  styleUrls: ['./details-pull.component.css']
})
export class DetailsPullComponent implements OnInit {
  @Input() workout: Workout | undefined;
  constructor(private detailsService: DetailsService) {}

  upperBack1: string | undefined = undefined;
  upperBack2: string | undefined = undefined;
  lats1: string | undefined = undefined;
  lats2: string | undefined = undefined;
  biceps1: string | undefined = undefined;
  biceps2: string | undefined = undefined;
  rearDelt: string | undefined = undefined;

  ngOnInit(): void {
    this.upperBack1 = this.detailsService?.capitalize(
      this.workout?.exercises['upper-back1']
    );
    this.upperBack2 = this.detailsService.capitalize(
      this.workout?.exercises['upper-back2']
    );
    this.lats1 = this.detailsService.capitalize(
      this.workout?.exercises['lats1']
    );
    this.lats2 = this.detailsService.capitalize(
      this.workout?.exercises['lats2']
    );
    this.biceps1 = this.detailsService.capitalize(
      this.workout?.exercises['biceps1']
    );
    this.biceps2 = this.detailsService.capitalize(
      this.workout?.exercises['biceps2']
    );
    this.rearDelt = this.detailsService.capitalize(
      this.workout?.exercises['rear-delt']
    );
  }
}
