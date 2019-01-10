import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { Task, CATEGORIES, PRIORITIES } from './task';
import { TaskService } from './task.service';
import { Subscription, from } from 'rxjs';
import { ModalServiceService } from './modal-service.service'
import { TaskeditformComponent } from './taskeditform/taskeditform.component'
import { TaskformComponent } from './taskform/taskform.component';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {

  tasks: Task[];
  task = new Task();
  constructor(private taskService: TaskService, private modalService: ModalServiceService) {

  }

  ngOnInit() {

    this.getAllTasks();
  }


  getAllTasks() {
    this.taskService.getAllTasks().pipe(first()).subscribe(res => {
      console.log("Getting all tasks")
      this.tasks = res;
    });
  }

  // addTask(task: Task) {
  //   this.taskService.addTask(task).subscribe(() => {

  //   });
  // }

  openTaskForm() {

    let hep = this.modalService.init(TaskformComponent, {}, {})

    hep.instance.notify.subscribe(e => {

      console.log("Should get all")
      this.getAllTasks()
    })
  }

  notify(e) {
    console.log("WORKED!!!!")
  }

  update(e) {
    let inputs = {
      task: e
    }
    this.modalService.init(TaskeditformComponent, inputs, {})
  }

  title = 'Webdashboard';
}
