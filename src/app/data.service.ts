import { Todo } from './todo.interface';

export class DataService {

  private data: Todo[] = [
    { title: 'Todo 1'},
    { title: 'Todo 2'},
    { title: 'Todo 3'}
  ];
  getData() {
    return this.data;
  }
  addData(title: string){
    this.data.push({title});
  }
}

