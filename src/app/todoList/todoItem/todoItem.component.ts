import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../todo.interface';

@Component({
  selector: 'todo-item',
  templateUrl: './todoItem.component.html',
  styleUrls: [ './todoItem.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() onChangeStatus = new EventEmitter<Todo>();
  constructor() {}

  public toggleStatus() {
    this.onChangeStatus.emit(this.todo);
  }
}
