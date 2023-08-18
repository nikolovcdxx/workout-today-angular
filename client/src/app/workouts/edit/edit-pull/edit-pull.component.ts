import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-pull',
  templateUrl: './edit-pull.component.html',
  styleUrls: ['./edit-pull.component.css']
})
export class EditPullComponent {
  @Input() workout: any;

}
