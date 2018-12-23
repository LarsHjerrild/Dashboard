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
  @Output() close = new EventEmitter();
  

  taskForm: FormGroup;

  
  constructor(fb: FormBuilder, private taskService: TaskService, private modalService : ModalServiceService) { 
    this.taskForm = fb.group({
      name: ['',Validators.required],
      description: [''],
      due_date: [this.dateadd(5)],
      category: [''],
      priority: [''],
      goal_origin: [''],
      time_estimate: ['']
    })
  }

  dateadd(n :number){
    const today = new Date();
    let newDate = new Date();
    newDate.setDate(today.getDate()+ n)

    return newDate.toISOString().substring(0,10);
  }

  ngOnInit() {
    
    // let creationDate = new Date(this.task.creation_date)

    // this.taskForm.controls['name'].setValue(this.task.name)
    // this.taskForm.controls['description'].setValue(this.task.description)
    this.taskForm.controls['due_date'].setValue(this.dateadd(5))
    // this.taskForm.controls['goal_origin'].setValue(this.task.goal_origin)
    // this.taskForm.controls['priority'].setValue(this.task.priority)
    // this.taskForm.controls['time_estimate'].setValue(this.task.time_estimate)
    // this.taskForm.controls['creation_date'].setValue(creationDate.toISOString().substring(0,10))
    // this.taskForm.value.name = this.task.name
  }
  closeForm(){
    this.modalService.destroy()
  }

  onSubmit(){
    console.warn("Submitting")
    // console.warn(this.taskForm.value.name)
    let tmp: Task = new Task();

    tmp.name = this.taskForm.value.name
    tmp.description = this.taskForm.value.description
    tmp.due_date = this.taskForm.value.due_date
    tmp.goal_origin = this.taskForm.value.goal_origin
    tmp.priority = this.taskForm.value.priority
    tmp.time_estimate = this.taskForm.value.time_estimate

    this.taskService.addTask(tmp).subscribe((data) => {
      this.modalService.destroy()
    });

  }

}
