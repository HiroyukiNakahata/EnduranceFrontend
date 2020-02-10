import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Todo} from '../model/todo';
import {httpErrorHandler} from '../model/error';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoSubject: Subject<Todo[]> = new Subject<Todo[]>();

  constructor(private httpClient: HttpClient) {
  }

  AjaxGetTodo(token: string): Promise<Todo[]> {
    return this.httpClient.get<Todo[]>('/api/todo', {
      headers: new HttpHeaders({Authorization: 'Bearer ' + token})
    }).toPromise().then(d => d).catch(httpErrorHandler);
  }

  getTodoSubject(): Subject<Todo[]> {
    return this.todoSubject;
  }
}
