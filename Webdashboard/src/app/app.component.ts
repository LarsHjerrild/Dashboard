import { Component, OnInit, OnChanges } from '@angular/core';
import { Task, CATEGORIES, PRIORITIES } from './task';
import { TaskService } from './task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService, ) {

  }

  ngOnInit() {

    this.getAllTasks();

    const task: Task = {
      name: "Mytask",
      description: "Cool task",
      category: CATEGORIES.FUN,
      priority: PRIORITIES.HIGH,
      goal_origin: "something",
      time_estimate: 10,
      due_date: new Date()
    }

    this.addTask(task)
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((data) => {
      console.log(data)
    });
  }

  openTaskForm() {
    document.getElementById('form-container').style.display = "flex";
  }
  closeTaskForm() {
    document.getElementById('form-container').style.display = "none";
  }

  title = 'Webdashboard';


}
