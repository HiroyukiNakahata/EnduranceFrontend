import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Todo} from '../../../model/todo';
import {TodoService} from '../../../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  todo: Todo[] = [];
  todoSubject: Subject<Todo[]>;
  subscription: Subscription;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoSubject = this.todoService.getTodoSubject();
    this.subscription = this.todoSubject.subscribe(
      msg => {
        console.log(msg);
        this.todo = msg;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
