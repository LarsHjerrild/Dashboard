import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:3000/api/model`)
  }

  addTask(task :Task): Observable<Task> {
    console.log("Requested")
    return this.http.post<Task>('http://localhost:3000/api/model', task)
  }

  updateTask(task :Task, id: string): Observable<Task> {
    console.log("update requested")
    let url: string = 'http://localhost:3000/api/model/' + id
    console.log(task)
    return this.http.put<Task>(url,task)
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>("http://localhost:3000/api/model/" + id)
  }
}
