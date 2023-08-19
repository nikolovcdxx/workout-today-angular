import { Component, Input, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Workout } from 'src/app/types/workout';

@Component({
  selector: 'app-details-legs',
  templateUrl: './details-legs.component.html',
  styleUrls: ['./details-legs.component.css']
})
export class DetailsLegsComponent implements OnInit {
  @Input() workout: Workout | undefined;
  constructor(private detailsService: DetailsService) {}

  quadriceps1: string | undefined = undefined;
  quadriceps2: string | undefined = undefined;
  hamstrings: string | undefined = undefined;
  glutes1: string | undefined = undefined;
  glutes2: string | undefined = undefined;
  calves: string | undefined = undefined;

  ngOnInit(): void {
    
    this.quadriceps1 = this.detailsService.capitalize(
      this.workout?.exercises['quadriceps1']
    );
    this.quadriceps2 = this.detailsService.capitalize(
      this.workout?.exercises['quadriceps2']
    );
    this.hamstrings = this.detailsService.capitalize(
      this.workout?.exercises['hamstrings']
    );
    this.glutes1 = this.detailsService.capitalize(
      this.workout?.exercises['glutes1']
    );
    this.glutes2 = this.detailsService.capitalize(
      this.workout?.exercises['glutes2']
    );
    this.calves = this.detailsService.capitalize(
      this.workout?.exercises['calves']
    );
  }
}
