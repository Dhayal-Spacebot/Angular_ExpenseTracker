import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  getLists(): Observable<List[]> {
    return this.webRequestService.getLists(`lists`);
  }

  createList(title: string): Observable<List> {
    debugger;
    return this.webRequestService.postList(`lists`, { title });
  }

  getTasks(listId: string): Observable<Task[]> {
    return this.webRequestService.getTasks(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string): Observable<Task> {
    return this.webRequestService.postTask(`lists/${listId}/tasks`, { title });
  }

  complete(task: Task): Observable<Task> {
    return this.webRequestService.patchTask(
      `lists/${task._listId}/tasks/${task._id}`,
      {
        completed: !task.completed,
      }
    );
  }
}
