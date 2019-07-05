import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';
import { ProjectformComponent } from '../projectform/projectform.component';
import { ProjectService } from '../project.service';
import { Project } from '../task';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  projects: Project[]

  constructor(private projectService: ProjectService, private modalService: ModalServiceService) { }


  ngOnInit() {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data.projects
    })
  }
  openProjectForm() {
    const tmp = this.modalService.init(ProjectformComponent, {}, ["notify"])

    tmp["notify"].subscribe(res => {
      this.projects.push(res)
    })
  }
}
