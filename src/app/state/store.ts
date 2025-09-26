import { Store, StoreConfig } from '@datorama/akita';
import { Todo } from '../todo.model';
import { Injectable } from '@angular/core';

export interface TodoState {
    todos: Todo[];
    isLoaded: boolean;
}

export const getInitialSTate = () => {
  return {
    todos: [],
    isLoaded: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class TodoStore extends Store<TodoState> {
  constructor() {
    super(getInitialSTate());
  }
}