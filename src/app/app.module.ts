import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ExercisesComponent } from './exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    TopBarComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
