import { Component, OnInit } from '@angular/core';
import { Project, Task } from '../task';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { ModalServiceService } from '../modal-service.service';
import { TaskformComponent } from '../taskform/taskform.component';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  tasks: Task[];

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private service: ProjectService,
    private modalService: ModalServiceService) { }

  ngOnInit() {


    this.route.paramMap.pipe(switchMap(res => { return this.service.getAllProjectTasks(res.get("id"))})).subscribe(res => {
      console.log(res.tasks)
      this.tasks = res.tasks
    })

    // this.service.getAllProjectTasks(params.id).subscribe(res => {
    //   this.tasks = res
    // })

    this.route.paramMap.pipe(
      switchMap(res => {
        return this.service.getProject(res.get("id"))
      })).subscribe(res => {
        console.log(res)
        this.project = res
      })
  }

  newTask(){

    let tmp = new Task()
    tmp.project = this.project
    this.modalService.init(TaskformComponent, {task: tmp}, [])
  }

}
