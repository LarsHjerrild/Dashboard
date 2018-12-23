import { Component, OnInit, Input } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';
import { Task, PRIORITIES } from '../task';
import { TaskService } from '../task.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-taskeditform',
  templateUrl: './taskeditform.component.html',
  styleUrls: ['./taskeditform.component.scss']
})
export class TaskeditformComponent implements OnInit {
  @Input() task: Task;
  
  taskForm: FormGroup;


  constructor(fb: FormBuilder, private modalService : ModalServiceService, private taskservice: TaskService) {
    this.taskForm = fb.group({
      name: [''],
      description: [''],
      due_date: [''],
      category: [''],
      priority: [''],
      goal_origin: [''],
      time_estimate: ['']
    })
   }

  ngOnInit() {
    this.taskForm.controls['name'].setValue(this.task.name)
    this.taskForm.controls['description'].setValue(this.task.description)
    this.taskForm.controls['due_date'].setValue(new Date(this.task.due_date).toISOString().substring(0,10))
    this.taskForm.controls['goal_origin'].setValue(this.task.goal_origin)
    this.taskForm.controls['priority'].setValue(this.task.priority)
    this.taskForm.controls['time_estimate'].setValue(this.task.time_estimate)
    this.taskForm.value.name = this.task.name
  }

  updateTask(){
    // console.log(this.taskForm.value.priority)

    // this.task.priority = PRIORITIES.HIGH

    // console.log(this.task.priority)
    let tmp: Task = new Task();
    tmp.name = this.taskForm.value.name
    tmp.description = this.taskForm.value.description
    tmp.due_date = this.taskForm.value.due_date
    tmp.goal_origin = this.taskForm.value.goal_origin
    tmp.priority = this.taskForm.value.priority
    tmp.time_estimate = this.taskForm.value.time_estimate

    console.log(tmp)

    this.taskservice.updateTask(tmp, this.task._id).subscribe((data) => {
      console.log("I actually got something back")
    })
  }

  public close() {
    this.modalService.destroy();
  }
  
  deleteTask(){
    this.taskservice.deleteTask(this.task._id).subscribe((data) =>{

      this.modalService.destroy()
    })
  }

  closeForm() {
    this.close()
  }

}
