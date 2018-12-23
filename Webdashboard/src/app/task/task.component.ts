import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

  onTaskClick(){
    this.update.emit(this.task)
  }

}
