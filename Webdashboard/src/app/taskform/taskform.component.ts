import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ModalServiceService } from '../modal-service.service';


@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {
  @Output() notify = new EventEmitter();

  taskForm: FormGroup;
  
  constructor(fb: FormBuilder, private taskService: TaskService, private modalService : ModalServiceService) { 
    this.taskForm = fb.group({
      name: ['',Validators.required],
      description: [''],
      due_date: [this.dateadd(5)],
      category: [''],
      priority: [''],
      goal_origin: [''],
      estimated_time: ['']
    })
  }

  dateadd(n :number){
    const today = new Date();
    let newDate = new Date();
    newDate.setDate(today.getDate()+ n)

    return newDate.toISOString().substring(0,10);
  }

  ngOnInit() {
    this.taskForm.controls['due_date'].setValue(this.dateadd(5))

  }
  closeForm(){
    this.notify.emit()
    console.log("closed")
    this.modalService.destroy()
  }

  onSubmit(){
  
    let tmp: Task = new Task();

    tmp.name = this.taskForm.value.name
    tmp.description = this.taskForm.value.description
    // tmp.due_date = this.taskForm.value.due_date
    // tmp.goal_origin = this.taskForm.value.goal_origin
    // tmp.priority = this.taskForm.value.priority
    tmp.estimated_time = this.taskForm.value.estimated_time

    this.taskService.addTask(tmp).subscribe((data) => {
      this.notify.emit()    
      this.modalService.destroy()
    });

  }

}
