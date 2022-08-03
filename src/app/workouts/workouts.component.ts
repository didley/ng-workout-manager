import { Component, OnInit } from '@angular/core';
import { workouts } from '../data';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  workouts = [...workouts];

  constructor() {}

  ngOnInit(): void {}
}
