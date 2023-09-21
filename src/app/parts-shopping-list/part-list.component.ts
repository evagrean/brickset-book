import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part.model';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css'],
})
export class PartListComponent implements OnInit {
  parts: Part[] = [
    new Part(
      '3298mia',
      'Minitalia Slope 33° 3 x 2 with Bottom X Supports',
      'https://cdn.rebrickable.com/media/parts/photos/2/3298mia-2-94cdd67a-5f98-463a-b440-46d183bb7222.jpg',
      5
    ),
    new Part(
      '3298mia',
      'Minitalia Slope 33° 3 x 2 with Bottom X Supports',
      'https://cdn.rebrickable.com/media/parts/photos/2/3298mia-2-94cdd67a-5f98-463a-b440-46d183bb7222.jpg',
      5
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
