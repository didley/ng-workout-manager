import { Component, Input, OnInit } from '@angular/core';
import { Exercise, exercises, Workout } from '../data';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
})
export class WorkoutComponent implements OnInit {
  @Input() workout?: Workout;
  exercises = [...exercises];

  constructor() {}

  ngOnInit(): void {}

  findExerciseDetails(id: Exercise['id']): Exercise | undefined {
    return exercises.find((exercise) => exercise.id === id);
  }
}
