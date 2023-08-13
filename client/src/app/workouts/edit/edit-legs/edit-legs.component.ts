import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-legs',
  templateUrl: './edit-legs.component.html',
  styleUrls: ['./edit-legs.component.css'],
})
export class EditLegsComponent implements OnInit {
  @Input() exercises: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.legsForm.setValue({
      quadriceps1: this.exercises.quadriceps1,
      quadriceps2: this.exercises.quadriceps2,
      hamstrings: this.exercises.hamstrings,
      glutes1: this.exercises.glutes1,
      glutes2: this.exercises.glutes2,
      calves: this.exercises.calves,
    });
  }

  legsForm = this.fb.group({
    quadriceps1: [''],
    quadriceps2: [''],
    hamstrings: [''],
    glutes1: [''],
    glutes2: [''],
    calves: [''],
  });

  editHandler(legsForm: FormGroup) {
    //
  }

  onClickVideoHandler() {
    //
  }
}
