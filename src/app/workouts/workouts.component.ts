import { Component, OnInit } from '@angular/core';
import { workouts } from '../data';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  workouts = [...workouts];

  handleToggleSetStatus = (
    workoutId: string,
    exerciseId: string,
    setIndex: number
  ) => {
    const workout = workouts.find((workout) => workout.id === workoutId);
    const exercise = workout?.exercises.find(
      (exercise) => exercise.id === exerciseId
    );
    const set = exercise?.sets[setIndex];
    if (set?.status) {
      if (set.status === 'pending') {
        set.status = 'complete';
      } else if (set.status === 'complete') {
        set.status = 'failed';
      } else {
        set.status = 'pending';
      }
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
