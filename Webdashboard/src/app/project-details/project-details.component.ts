import { Component, OnInit } from '@angular/core';
import { Project, Task } from '../task';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { ModalServiceService } from '../modal-service.service';
import { TaskformComponent } from '../taskform/taskform.component';
import { TaskeditformComponent } from '../taskeditform/taskeditform.component';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  cb: FormControl = new FormControl(false);
  project: Project;
  tasks: Task[];
  alltasks: Task[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProjectService,
    private modalService: ModalServiceService) { }

  ngOnInit() {


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
  filterfunc(res){
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
