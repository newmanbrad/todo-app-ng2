"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./todo.service');
/***
 *  Notes:
 *
 *  Selector -  The name of the component / directive that is to be used.
 *              For instance this component is referenced in the index.html file.
 *
 *  Template - Inline markup can be used or a templates file can be referenced.
 */
var AppComponent = (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.title = 'Todo List';
    }
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        console.info('calling getTodos from ngOnInit.');
        this.todoService.getTodos().then(function (todos) { return _this.todos = todos; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.onSelect = function (todo) { this.selectedTodo = todo; console.info('todo id # ' + todo.id + ' has been selected.'); };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: "\n    <h2>{{title}}</h2>\n    <ul class=\"todos list-unstyled\">\n      <li *ngFor=\"let todo of todos\"\n        [class.selected]=\"todo === selectedTodo\"\n        (click)=\"onSelect(todo)\">\n        <span class=\"badge\">{{todo.id}}</span> {{todo.title}}\n      </li>\n    </ul>\n    <my-todo-detail [todo]=\"selectedTodo\"></my-todo-detail>\n  ",
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map