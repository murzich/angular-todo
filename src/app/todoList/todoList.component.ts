import { Component } from "@angular/core";
import { DataService } from '../data.service';
import {Todo} from '../todo.interface';
import {ViewEncapsulation} from '@angular/compiler/src/core';

@Component({
  selector: 'app-scratch-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css'],
  providers: [],
  // encapsulation: ViewEncapsulation.None
})
export class TodoListComponent {
  public todoList: Todo[];

  constructor(private dataService: DataService) {

     this.todoList = this.dataService.getData();
     console.log(this.todoList);
  };
  public onChangeStatus(todo) {
    console.log(todo);
  }
}
