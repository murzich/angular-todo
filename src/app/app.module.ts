import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from "./todoList/todoList.component";
import { TodoItemComponent } from "./todoList/todoItem/todoItem.component";
import { DataService } from './data.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
