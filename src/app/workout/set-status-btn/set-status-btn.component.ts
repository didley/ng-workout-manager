import { Component, Input, OnInit } from '@angular/core';
import { ExerciseStatus } from 'src/app/data';

@Component({
  selector: 'app-set-status-btn',
  templateUrl: './set-status-btn.component.html',
  styleUrls: ['./set-status-btn.component.css'],
})
export class SetStatusBtnComponent implements OnInit {
  @Input() status?: ExerciseStatus;

  constructor() {}

  ngOnInit(): void {}
}
