import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  addTodo(todoModel: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://dummyjson.com/todos/add', todoModel);
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`https://dummyjson.com/todos/${id}`);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http
      .get<{ todos: Todo[] }>('https://dummyjson.com/todos')
      .pipe(map((response) => response.todos));
  }

  deleteTodo(id: number): Observable<{ isDeleted: boolean }> {
    return this.http.delete<{ isDeleted: boolean }>(
      `https://dummyjson.com/todos/${id}`
    );
  }

  updateTodo(id: number, todoModel: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`https://dummyjson.com/todos/${id}`, todoModel);
  }
}
