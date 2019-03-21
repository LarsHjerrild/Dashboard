import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcompletionformComponent } from './taskcompletionform.component';

describe('TaskcompletionformComponent', () => {
  let component: TaskcompletionformComponent;
  let fixture: ComponentFixture<TaskcompletionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskcompletionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcompletionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
