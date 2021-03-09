import { ITodoItem } from './../models/index';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStore } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private store: BehaviorSubject<IStore> = new BehaviorSubject({
    list: [{ id: 0, title: 'default item', status: false }],
  });

  constructor() {}

  getList$(): Observable<ITodoItem[]> {
    return this.store.asObservable().pipe(map((store) => store.list));
  }

  getDoneItemsQuantity$(): Observable<number> {
    return this.store
      .asObservable()
      .pipe(map((store) => store.list.filter((item) => !!item?.status).length));
  }

  updateItem(item: ITodoItem): void {
    const state = this.store.getValue();

    const newList = state.list.map((_item) =>
      _item.id === item.id ? item : _item
    );

    const newState = {
      ...state,
      list: newList,
    };

    this.store.next(newState);
  }

  createItem(item: Partial<ITodoItem>): void {
    const state = this.store.getValue();

    const newItem = {
      ...item,
      id: state.list.length,
    } as ITodoItem;

    const newState = {
      ...state,
      list: [...state.list, newItem],
    };

    this.store.next(newState);
  }
}
