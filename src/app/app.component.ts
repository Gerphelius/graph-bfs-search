import { Component } from '@angular/core';
import { GraphSearchService } from './graph-search.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private graphSearchService: GraphSearchService) {}

  ngOnInit() {
    this.graphSearchService.findArticulationPointsBfs(points);
  }
}

const points = [
  { x: 2, y: 2 },
  { x: 2, y: 3 },
  { x: 2, y: 5 },
  { x: 3, y: 2 },
  { x: 3, y: 5 },
  { x: 4, y: 2 },
  { x: 4, y: 5 },
  { x: 5, y: 2 },
  { x: 5, y: 3 },
  { x: 5, y: 4 },
  { x: 5, y: 5 },
];

// const points = [
//   { x: 2, y: 2 },
//   // { x: 2, y: 3 },
//   { x: 2, y: 4 },
//   { x: 3, y: 2 },
//   // { x: 3, y: 3 },
//   { x: 3, y: 4 },
//   { x: 4, y: 2 },
//   // { x: 4, y: 3 },
//   { x: 4, y: 4 },
// ];
