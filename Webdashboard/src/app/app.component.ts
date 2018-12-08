import { Component, OnInit, OnChanges } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService,) {
    
   }

  ngOnInit() {
    
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  openTaskForm() {
    document.getElementById('form-container').style.display = "block";
  }
  closeTaskForm() {
    document.getElementById('form-container').style.display = "none";
  }

  title = 'Webdashboard';
  

}
