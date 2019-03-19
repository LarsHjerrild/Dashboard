import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.scss']
})
export class ProjectformComponent implements OnInit {

  constructor(private modalService : ModalServiceService) { }

  ngOnInit() {
    console.log("Entered")

  }

  closeForm() {
    this.modalService.destroy()
  }
  
}
