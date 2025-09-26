import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppService } from '../app.service';
import { TodoStore } from '../state/store';
import { TodoQuery } from '../state/query';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  standalone: true,
  styleUrl: './add-todo.component.scss',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class AddTodoComponent implements OnInit {
  constructor(
    private apiService: AppService,
    private todoStore: TodoStore,
    private TodoQuery: TodoQuery,
    private router: Router
  ) {}

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      isCompleted: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required]),
    });
  }

  addTodo() {
    console.log(this.form.value);
    this.todoStore.setLoading(true);
    this.apiService.addTodo(this.form.value).subscribe((res) => {
      this.todoStore.update((state) => {
        return {
          todos: [...state.todos, res],
        };
      });   
      this.todoStore.setLoading(false);
      this.router.navigateByUrl('');
  });
}
}
