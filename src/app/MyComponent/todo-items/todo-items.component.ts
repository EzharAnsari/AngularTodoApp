import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo:any;
  @Input() i:any;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() checkboxClick:EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.todo = ''
    this.i = ''
  }

  ngOnInit(): void {
  }

  onClick(todo: Todo): void {
    this.deleteTodo.emit(todo);
    console.log("OnClick has been triggerd");
  }

  onCheckboxClick(todo: Todo): void {
    this.checkboxClick.emit(todo);
    console.log(todo);

  }

}
