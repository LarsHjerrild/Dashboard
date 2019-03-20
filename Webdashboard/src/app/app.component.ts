import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { Task, CATEGORIES, PRIORITIES } from './task';
import { TaskService } from './task.service';
import { Subscription, from, pipe } from 'rxjs';
import { ModalServiceService } from './modal-service.service'
import { TaskeditformComponent } from './taskeditform/taskeditform.component'
import { TaskformComponent } from './taskform/taskform.component';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
  searchfield: FormControl = new FormControl('');
  tasks: Task[];
  task = new Task();
  constructor(private taskService: TaskService, private modalService: ModalServiceService) {

  }

  ngOnInit() {
    this.getAllTasks();

    this.searchfield.valueChanges.pipe(switchMap(res => {
      return this.taskService.getAllTasks(res)
    })).subscribe(res => {
      this.tasks = res.tasks
    })
  }


  getAllTasks() {
    // var obs1 = this.taskService.getAllTasks()
    // obs1.pipe(switchMap((val) => {
    //   return this.taskService.getAllTasks()
    // })).subscribe(res => {
    //   this.tasks = res.tasks
    // });

    // switchMap(res => this.taskService.getAllTasks())
    // switchMap(res => this.taskService.getAllTasks().subscribe(res => {
    //   console.log(res)
    // }))
    // this.taskService.getAllTasks().pipe(switchMap(res => this.taskService.getAllTasks())).subscribe(res => {
    //   console.log(res)
    // })
    this.taskService.getAllTasks().pipe().subscribe(res => {

      //Change to task DTO
      this.tasks = res.tasks;
    });
  }
  mychange() {
    this.getAllTasks()
  }
  // addTask(task: Task) {
  //   this.taskService.addTask(task).subscribe(() => {

  //   });
  // }

  // openTaskForm() {

  //   let hep = this.modalService.init(TaskformComponent, {}, {})

  //   hep.instance.notify.subscribe(e => {

  //     console.log("Should get all")
  //     this.getAllTasks()
  //   })
  // }

  // notify(e) {
  //   console.log("WORKED!!!!")
  // }

  // /**Maybe not so pretty but okay TODO evaluate if OK */
  // delete(e) {
  //   this.taskService.deleteTask(e._id).pipe(first()).subscribe(res => {
  //     this.getAllTasks()
  //   })
  // }

  // verify(e) {
  //   console.log(e)
  //   this.taskService.updateTask(e, e._id).pipe(first()).subscribe(res => {
  //     this.getAllTasks()
  //   })
  // }

  // update(e) {
  //   let inputs = {
  //     task: e
  //   }
  //   this.modalService.init(TaskeditformComponent, inputs, {})
  // }

  // title = 'Atta | working smarter';
}
