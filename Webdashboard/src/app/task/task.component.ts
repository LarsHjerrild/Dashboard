import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../task'

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


  constructor() { }

  ngOnInit() {
  }

  onTaskClick(){
    this.update.emit(this.task)
  }
  onTaskDelete(){
    this.delete.emit(this.task)
  }

  OnVerify() {
    this.task.status = 'completed'
    this.verify.emit(this.task)
  }
}
