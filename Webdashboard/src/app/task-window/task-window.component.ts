import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormControl } from '@angular/forms';
import { Task } from '../task';
import { switchMap, first } from 'rxjs/operators';
import { ModalServiceService } from '../modal-service.service';
import { TaskformComponent } from '../taskform/taskform.component';
import { TaskeditformComponent } from '../taskeditform/taskeditform.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.scss']
})
export class TaskWindowComponent implements OnInit {
  searchfield: FormControl = new FormControl('');
  tasks: Task[];
  task = new Task();
  constructor(private taskService: TaskService, private modalService: ModalServiceService) { }

  ngOnInit() {
    this.getAllTasks();

    this.searchfield.valueChanges.pipe(switchMap(res => {
      return this.taskService.getAllTasks(res)
    })).subscribe(res => {
      this.tasks = res.tasks
    })
  }
  getAllTasks() {
    this.taskService.getAllTasks().pipe().subscribe(res => {
      this.tasks = res.tasks;
    });
  }
  mychange() {
    this.getAllTasks()
  }
  openTaskForm() {
    console.log("Looking correctly")
    let hep = this.modalService.init(TaskformComponent, {}, ["notify"])

    hep["notify"].subscribe(e => {

      this.getAllTasks()
    })
  }

  notify(e) {
    console.log("WORKED!!!!")
  }

  /**Maybe not so pretty but okay TODO evaluate if OK */
  delete(e) {
    this.taskService.deleteTask(e._id).pipe(first()).subscribe(res => {
      this.getAllTasks()
    })
  }

  verify(e) {
    console.log(e)
    this.taskService.updateTask(e, e._id).pipe(first()).subscribe(res => {
      this.getAllTasks()
    })
  }

  update(e) {
    console.log("Working")
    let inputs = {
      task: e
    }

    let hep = this.modalService.init(TaskeditformComponent, inputs,  ["notify"])

    hep["notify"].subscribe(e => {

      this.getAllTasks()
    })
  }

  title = 'Atta | working smarter';

}
