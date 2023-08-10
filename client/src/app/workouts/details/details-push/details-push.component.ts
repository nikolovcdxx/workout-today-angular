import { Component, Input, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-details-push',
  templateUrl: './details-push.component.html',
  styleUrls: ['./details-push.component.css'],
})
export class DetailsPushComponent implements OnInit {
  @Input() workout: Workout | undefined;
  constructor(private detailsService: DetailsService) {}

  upperChest: string | undefined = undefined;
  middleChest: string | undefined = undefined;
  lowerChest: string | undefined = undefined;
  triceps1: string | undefined = undefined;
  triceps2: string | undefined = undefined;
  frontDelt: string | undefined = undefined;
  sideDelt: string | undefined = undefined;

  ngOnInit(): void {
    this.upperChest = this.detailsService?.capitalize(
      this.workout?.exercises['upper-chest']
    );
    this.middleChest = this.detailsService.capitalize(
      this.workout?.exercises['middle-chest']
    );
    this.lowerChest = this.detailsService.capitalize(
      this.workout?.exercises['lower-chest']
    );
    this.triceps1 = this.detailsService.capitalize(
      this.workout?.exercises['triceps1']
    );
    this.triceps2 = this.detailsService.capitalize(
      this.workout?.exercises['triceps2']
    );
    this.frontDelt = this.detailsService.capitalize(
      this.workout?.exercises['front-delt']
    );
    this.sideDelt = this.detailsService.capitalize(
      this.workout?.exercises['side-delt']
    );
  }
}
