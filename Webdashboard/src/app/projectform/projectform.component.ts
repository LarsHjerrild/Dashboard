import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.scss']
})
export class ProjectformComponent implements OnInit {

  projectForm: FormGroup;

  constructor(fb: FormBuilder, private projectService: ProjectService,private modalService : ModalServiceService) { 
    this.projectForm = fb.group({
      name: '',
      description: ''
    })
  }

  ngOnInit() {
  }

  closeForm() {
    this.modalService.destroy()
  }
  onSubmit() {
    const tmp = {
      name: this.projectForm.value.name,
      descrition: this.projectForm.value.description
    }

    this.projectService.addProject(tmp).subscribe((data) => {
      console.warn(data)
      this.modalService.destroy()
    })
  }
}
