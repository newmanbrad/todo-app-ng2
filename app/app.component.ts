import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

/***
 *  Notes:
 *
 *  Selector -  The name of the component / directive that is to be used.
 *              For instance this component is referenced in the index.html file.
 *
 *  Template - Inline markup can be used or a templates file can be referenced.
 */

@Component({
    selector: 'todo-app',
    template: `
    <h2>{{title}}</h2>
    <ul class="todos list-unstyled">
      <li *ngFor="let todo of todos"
        [class.selected]="todo === selectedTodo"
        (click)="onSelect(todo)">
        <span class="badge">{{todo.id}}</span> {{todo.title}}
      </li>
    </ul>
    <my-todo-detail [todo]="selectedTodo"></my-todo-detail>
  ` ,
    providers: [TodoService]
})
export class AppComponent implements OnInit {
    title = 'Todo List';
    todos: Todo[];
    selectedTodo: Todo;
    constructor(private todoService: TodoService) { }
    getTodos() {
        console.info('calling getTodos from ngOnInit.');
        this.todoService.getTodos().then(todos => this.todos = todos);
    }
    ngOnInit() {
        this.getTodos();
    }
    onSelect(todo: Todo) { this.selectedTodo = todo; console.info( 'todo id # ' + todo.id + ' has been selected.'); }
}
