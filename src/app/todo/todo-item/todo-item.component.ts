import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITodoItem } from '../models';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item: ITodoItem;
  @Output() statusChanged: EventEmitter<boolean> = new EventEmitter();
  statusControl: FormControl = new FormControl(false);
  private isAlive = true;
  constructor() {}

  ngOnInit(): void {
    this.statusControl.valueChanges
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((value) => {
        this.statusChanged.emit(value);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('item' in changes && this.item) {
      this.statusControl.setValue(this.item?.status);
    }
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
