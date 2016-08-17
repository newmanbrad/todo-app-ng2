import { Component, Input } from '@angular/core';
import { Todo } from './todo';
@Component({
    selector: 'my-todo-detail',
    template: `
    <div *ngIf="todo">
      <h2>{{todo.title}} details!</h2>
      <div><label>ID: </label>{{todo.id}}</div>
      <div>
        <label>Title: </label>
        <input [(ngModel)]="todo.title" placeholder="Title"/>
      </div>
    </div>
  `
})
export class TodoDetailComponent {
    @Input()
    todo: Todo;
}
