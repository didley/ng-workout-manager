import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStatusBtnComponent } from './set-status-btn.component';

describe('SetStatusBtnComponent', () => {
  let component: SetStatusBtnComponent;
  let fixture: ComponentFixture<SetStatusBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetStatusBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetStatusBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
