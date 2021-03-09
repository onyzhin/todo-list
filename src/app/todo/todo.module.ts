import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, TodoCreateComponent, CounterComponent],
  exports: [TodoListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class TodoModule {}
