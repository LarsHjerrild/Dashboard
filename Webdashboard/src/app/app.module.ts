import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskformComponent } from './taskform/taskform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskeditformComponent } from './taskeditform/taskeditform.component';
import { ProjectComponent } from './project/project.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskWindowComponent } from './task-window/task-window.component';
import { StatpageComponent } from './statpage/statpage.component';
import { ProjectformComponent } from './projectform/projectform.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectViewsComponent } from './project-views/project-views.component';
import { TaskcompletionformComponent } from './taskcompletionform/taskcompletionform.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectGoalsComponent } from './project-goals/project-goals.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/**
 * App routing
 */
const appRoutes: Routes = [
  { path: 'tasks', component: TaskWindowComponent },
  { path: 'projects', component: ProjectComponent },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'tasks', component: ProjectTasksComponent},
          { path: 'dashboard', component: ProjectDashboardComponent },
          { path: 'goals', component: ProjectGoalsComponent },
          { path: '', component: ProjectTasksComponent },
        ]
      }
    ]
  },
  { path: 'stats', component: StatpageComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskformComponent,
    TaskeditformComponent,
    ProjectComponent,
    TaskWindowComponent,
    StatpageComponent,
    ProjectformComponent,
    ProjectDetailsComponent,
    ProjectViewsComponent,
    TaskcompletionformComponent,
    ProjectDashboardComponent,
    ProjectGoalsComponent,
    ProjectTasksComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    TaskeditformComponent,
    TaskformComponent,
    ProjectformComponent,
    TaskcompletionformComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
