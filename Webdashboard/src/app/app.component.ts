import { Component } from '@angular/core';
import { TASKS } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Webdashboard';
  tasks = TASKS;
  
}
