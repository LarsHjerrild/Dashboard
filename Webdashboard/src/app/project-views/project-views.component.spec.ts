import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewsComponent } from './project-views.component';

describe('ProjectViewsComponent', () => {
  let component: ProjectViewsComponent;
  let fixture: ComponentFixture<ProjectViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
