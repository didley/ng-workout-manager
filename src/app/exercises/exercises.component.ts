import { Component, OnInit } from '@angular/core';
import { exercises } from '../data';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  exercises = [...exercises];

  constructor() {}

  ngOnInit(): void {}
}
