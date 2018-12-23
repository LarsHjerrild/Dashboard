import { Component, OnInit, OnChanges } from '@angular/core';
import { Task, CATEGORIES, PRIORITIES } from './task';
import { TaskService } from './task.service';
import { Subscription, from } from 'rxjs';
import { ModalServiceService } from './modal-service.service'
import { TaskeditformComponent } from './taskeditform/taskeditform.component'
import { TaskformComponent } from './taskform/taskform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit, OnChanges {

  tasks: Task[];
  task = new Task();
  constructor(private taskService: TaskService, private modalService: ModalServiceService) {

  }
  
  ngOnChanges(){
    this.getAllTasks();
  }

  ngOnInit() {

    this.getAllTasks();

    // const task: Task = {
    //   name: "Mytask",
    //   description: "Cool task",
    //   category: CATEGORIES.FUN,
    //   priority: PRIORITIES.HIGH,
    //   goal_origin: "something",
    //   time_estimate: 10,
    //   due_date: new Date()
    // }

    // this.addTask(task)
  }
  // close(e) {
  //   console.log("Closing")
  //   document.getElementById('form-container').style.display = "none";
  // }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((data) => {
    });
  }

  openTaskForm() {
    this.modalService.init(TaskformComponent, {}, {})
  }


  update(e) {
    console.log(e)
    let inputs = {
      task: e
    }
    this.modalService.init(TaskeditformComponent, inputs, {})
  }

  title = 'Webdashboard';
}
