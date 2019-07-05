import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Project, Task } from '../task';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { ModalServiceService } from '../modal-service.service';
import { TaskformComponent } from '../taskform/taskform.component';
import { TaskeditformComponent } from '../taskeditform/taskeditform.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {
  cb: FormControl = new FormControl(false);
  searchfield: FormControl = new FormControl('');
  project: Project;
  tasks: Task[];
  alltasks: Task[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProjectService,
    private modalService: ModalServiceService) { }

  ngOnInit() {

    // this.searchfield.valueChanges.pipe(switchMap(res => {
    //   return this.route.paramMap.pipe(switchMap(res => { return this.service.getAllProjectTasks(res.get("id")) }))
    // })).subscribe(res => {
    //   this.tasks = res.tasks
    //   this.filterfunc(this.cb.value)
    // })

    this.route.paramMap.pipe(switchMap(res => { return this.service.getAllProjectTasks(res.get("id")) })).subscribe(res => {
      this.tasks = res.tasks
      this.alltasks = this.tasks
      this.filterfunc(false)
    })

    this.route.paramMap.pipe(
      switchMap(res => {
        return this.service.getProject(res.get("id"))
      })).subscribe(res => {
        console.log(res)
        this.project = res
      })

    this.cb.valueChanges.subscribe(res => {
      this.filterfunc(res)
    })

  }
  filterfunc(res) {
    if (!res) {
      const hep = this.tasks.filter((task) => {
        if (task.status !== 'completed') {
          return task;
        }
      })
      this.tasks = hep
    }
    else {
      this.tasks = this.alltasks
    }
  }

  delete($event) {
    const tmp = this.tasks.indexOf($event)
    if (tmp > -1) {
      this.tasks.splice(tmp, 1);
    }
  }

  newTask() {

    let tmp = new Task()
    tmp.project = this.project
    let input = this.modalService.init(TaskformComponent, { task: tmp }, ["notify"])

    //Get event from modal
    input["notify"].subscribe(res => {
      const hep = Date.now()
      res.created_date = hep;
      this.tasks.push(res)
    })
  }

  update(e) {
    let inputs = {
      task: e
    }
    this.modalService.init(TaskeditformComponent, inputs, ["notify"])
  }

}
