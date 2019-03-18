import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';
import { ProjectformComponent } from '../projectform/projectform.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  ngOnInit() {
  }
  openProjectForm() {
   this.modalService.init(ProjectformComponent, {}, {})
  }
}
