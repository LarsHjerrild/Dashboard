import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task } from './task';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://localhost:3000/api/model`)
  }

  addTask(task :Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:3000/api/model', task)
  }

  updateTask(task :Task, id: string): Observable<Task> {
    let url: string = 'http://localhost:3000/api/model/' + id
    return this.http.put<Task>(url,task)
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>("http://localhost:3000/api/model/" + id)
  }
}
