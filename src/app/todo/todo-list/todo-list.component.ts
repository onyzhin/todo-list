import { ITodoItem } from './../models/index';
import { Component, OnInit } from '@angular/core';

import { StoreService } from '../store/store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  list$: Observable<ITodoItem[]>;
  quantity$: Observable<number>;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.list$ = this.storeService.getList$();
    this.quantity$ = this.storeService.getDoneItemsQuantity$();
  }

  updateTodoItem(status: boolean, item: ITodoItem): void {
    this.storeService.updateItem({
      ...item,
      status,
    });
  }

  createTodoItem(item: Partial<ITodoItem>): void {
    this.storeService.createItem(item);
  }
}
