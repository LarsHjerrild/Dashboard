import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task } from './task';
import { first } from 'rxjs/operators';

const rooturl = environment.rootURL
const module = '/task'

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(search? :string): Observable<any> { 
    return this.http.get<any>(rooturl+module, 
      {params: {name: search}
    })
  }

  addTask(task :Task): Observable<Task> {
    return this.http.post<Task>(rooturl+module, task)
  }

  updateTask(task :Task, id: string): Observable<Task> {
    
    let url: string = rooturl + module + '/'+ id
    console.log(url)
    return this.http.put<Task>(url,task)
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(rooturl + module + '/'+ id)
  }
}
