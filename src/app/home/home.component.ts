import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { TodoQuery } from '../state/query';
import { TodoStore } from '../state/store';
import { Todo } from '../todo.model';
import { filter, switchMap, take } from 'rxjs';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    CommonModule
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private todoQuery: TodoQuery,
    private todoStore: TodoStore,
    private apiService: AppService
  ) {}

  loading: boolean = false;
  todos : Todo[] = [];

  ngOnInit(): void {
    this.todoQuery.getIsLoading().subscribe((res) => {
      this.loading = res;
    });

    this.todoQuery.getTodos().subscribe((res) => {
      this.todos = res;
    });

    this.todoQuery.getLoaded().pipe(
      take(1),
      filter((loaded) => !loaded),
      switchMap(() => {
        this.todoStore.setLoading(true);
        return this.apiService.getAllTodos();
      })
    ).subscribe( res => {
      this.todoStore.update( state =>{  
       return {
          todos: res,
          isLoaded: true
        };
      });
      this.todoStore.setLoading(false);
    }, error => {
      console.log(error);
    });
  }
  addTodo() {
    this.router.navigateByUrl('/add-todo');
  }
}
