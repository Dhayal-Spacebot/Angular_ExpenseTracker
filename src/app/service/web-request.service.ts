import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) { }

  // http calls for List resource

  getLists(uri: string): Observable<List[]> {
    return this.http.get<List[]>(`${environment.ROOT_URL}/${uri}`);
  }

  postList(uri:string, payload: object): Observable<List> {
    return this.http.post<List>(`${environment.ROOT_URL}/${uri}`, payload);
  }

  patchList(uri:string, payload: object): Observable<List> {
    return this.http.patch<List>(`${environment.ROOT_URL}/${uri}`,payload);
  }

  deleteList(uri: string): Observable<List> {
    return this.http.delete<List>(`${environment.ROOT_URL}/${uri}`);
  }

  // http calls for Task resource
  getTasks(uri: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.ROOT_URL}/${uri}`);
  }

  postTask(uri:string, payload: object): Observable<Task> {
    return this.http.post<Task>(`${environment.ROOT_URL}/${uri}`,payload);
  }

  patchTask(uri:string, payload: object): Observable<Task> {
    return this.http.patch<Task>(`${environment.ROOT_URL}/${uri}`,payload);
  }

  deleteTask(uri: string): Observable<Task> {
    return this.http.delete<Task>(`${environment.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.ROOT_URL}/users/login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

}
