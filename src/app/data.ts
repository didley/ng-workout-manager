export type Workout = {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
};

export type Exercise = {
  id: string;
  name: string;
  details?: string;
};

type ExerciseStatus = 'pending' | 'complete' | 'failed';
type WeightInKG = number;
type ExerciseSet = { weight: WeightInKG; reps: number; status: ExerciseStatus };

type WorkoutExercise = {
  id: string;
  exerciseId: Exercise['id'];
  sets: ExerciseSet[];
  notes?: string;
};

export const workouts: Workout[] = [
  {
    id: 'je3fs4hwi3ij4fhs',
    name: 'Upper Body',
    exercises: [
      {
        id: 'h050j303gj3',
        exerciseId: 'j0323mc02hc94f',
        sets: [
          { weight: 100, reps: 5, status: 'complete' },
          { weight: 100, reps: 5, status: 'failed' },
          { weight: 100, reps: 5, status: 'pending' },
        ],
      },
      {
        id: 'j0503gj3asg03g3',
        exerciseId: 'k323mc0g2hc94f',
        sets: [
          { weight: 30, reps: 6, status: 'pending' },
          { weight: 25, reps: 6, status: 'pending' },
          { weight: 20, reps: 6, status: 'pending' },
        ],
        notes: "Don't hit your nose",
      },
    ],
  },
  {
    id: 'se3gfs4ghi3ij4fhs',
    name: 'Lower Body',
    exercises: [
      {
        id: 'bsi4hix9xg3ks',
        exerciseId: 'ds5gch5h402hc94f',
        sets: [
          { weight: 200, reps: 5, status: 'pending' },
          { weight: 200, reps: 5, status: 'pending' },
        ],
      },
    ],
  },
  {
    id: 'jsg5jhf5s4gjh555f',
    name: 'Full Body',
    exercises: [],
  },
];

export const exercises: Exercise[] = [
  { name: 'Bench Press', id: 'j0323mc02hc94f' },
  { name: 'Overhead Press', id: 'k323mc0g2hc94f' },
  { name: 'Deadlift', id: 'ds5gch5h402hc94f' },
  { name: 'Lunge', id: 'ds5h65h4402hg94f' },
  { name: 'Bicep Curl', id: 'ds5g346c640245794f' },
];
