import { FormControl } from '@angular/forms';
import { ITodoItem } from './../models/index';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  @Output() create: EventEmitter<Partial<ITodoItem>> = new EventEmitter();
  title: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  createItem(): void {
    this.create.emit({
      title: this.title.value,
      status: false,
    });
  }
}
