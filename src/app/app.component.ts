import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'todo';
  model: Model = new Model();

  getName(): string {
    return this.model.user;
  }

  getTodoItems(): Array<TodoItem> {
    return this.model.items.filter(item => !item.done);
  }

  addItem(itemDescription: string): void {
    if (itemDescription != "")
      this.model.items.push(new TodoItem(itemDescription, false));
  }
}
