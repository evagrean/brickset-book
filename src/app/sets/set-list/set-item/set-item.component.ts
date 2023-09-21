import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-set-item',
  templateUrl: './set-item.component.html',
  styleUrls: ['./set-item.component.css'],
})
export class SetItemComponent {
  @Input() set;
}
