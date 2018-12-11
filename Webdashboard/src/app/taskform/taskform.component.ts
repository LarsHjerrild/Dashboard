import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {


  taskForm = new FormGroup({
    name: new FormControl('',Validators.required),
    description: new FormControl(''),
    due_date: new FormControl(''),
    category: new FormControl(''),
    priority: new FormControl(''),
    goal_origin: new FormControl(''),
    time_estimate: new FormControl(''),
  })



  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn("Submitting")
    console.warn(this.taskForm.value.name)
  }

}
