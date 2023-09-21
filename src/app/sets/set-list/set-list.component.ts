import { Component, OnInit } from '@angular/core';
import { Set } from '../set.model';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css'],
})
export class SetListComponent implements OnInit {
  sets: Set[] = [
    new Set(
      'The Forbidden Forest',
      'Hagrid in the Forbidden Forest with spider',
      64,
      'https://cdn.rebrickable.com/media/thumbs/sets/4865-1/49343.jpg/1000x800p.jpg?1658330824.364181',
      'Harry Potter'
    ),
    new Set(
      'The Forbidden Forest',
      'Hagrid in the Forbidden Forest with spider',
      64,
      'https://cdn.rebrickable.com/media/thumbs/sets/4865-1/49343.jpg/1000x800p.jpg?1658330824.364181',
      'Harry Potter'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
