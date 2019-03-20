import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const rooturl = environment.rootURL
const module = '/task/projects'

@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  constructor(private http: HttpClient) { }


  getAllProjects(): Observable<any> {
    return this.http.get<any>(rooturl + module)
  }

  addProject(task: any): Observable<any> {
    return this.http.post<any>(rooturl + module, task)
  }

  getProject(id: string): Observable<any> {
    return this.http.get(rooturl + module + '/' + id)
  }

  getAllProjectTasks(id: string): Observable<any> {
    return this.http.get(rooturl + module + '/' + id +'/task')
  }
}
