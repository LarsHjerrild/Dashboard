import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../task';

@Component({
  selector: 'app-project-views',
  templateUrl: './project-views.component.html',
  styleUrls: ['./project-views.component.scss']
})
export class ProjectViewsComponent implements OnInit {
  @Input() project: Project;
  
  constructor() { }
  


  ngOnInit() {
  }


}
