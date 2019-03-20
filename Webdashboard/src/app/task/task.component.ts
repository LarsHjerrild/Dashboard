import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task.service';
import { ModalServiceService } from '../modal-service.service';
import { TaskeditformComponent } from '../taskeditform/taskeditform.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() verify = new EventEmitter();
  @Input() task: Task;


  constructor(private taskService: TaskService, private modalService: ModalServiceService) { }

  ngOnInit() {
  }

  onTaskClick() {
   
   this.update.emit(this.task)
    // let inputs = {
    //   task: this.task
    // }
    // this.modalService.init(TaskeditformComponent, inputs, {})
  }

  onTaskDelete() {
    this.taskService.deleteTask(this.task._id).pipe().subscribe(res => {
    })
    delete this.task
  }

  OnVerify() {
    this.task.status = 'completed'
    this.taskService.updateTask(this.task, this.task._id).subscribe(res => {
    })
  }
}
