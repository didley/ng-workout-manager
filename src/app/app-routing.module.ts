import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  { path: '', redirectTo: '/workouts', pathMatch: 'full' },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'exercises', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
