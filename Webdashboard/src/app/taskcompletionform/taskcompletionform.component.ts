import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../task';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-taskcompletionform',
  templateUrl: './taskcompletionform.component.html',
  styleUrls: ['./taskcompletionform.component.scss']
})
export class TaskcompletionformComponent implements OnInit {
  @Output() notify = new EventEmitter();
  @Input() task?: Task;

  taskCompletionForm: FormGroup;

  constructor(fb: FormBuilder, private modalService: ModalServiceService) {
    this.taskCompletionForm = fb.group({
      completed_time: ['', Validators.required]
    })
  }
  closeForm() {
    this.modalService.destroy()
  }

  ngOnInit() {
  }
  onSubmit() {
    this.task.completed_time = this.taskCompletionForm.value.completed_time
    this.notify.emit(this.task)
    this.modalService.destroy()
  }

}
