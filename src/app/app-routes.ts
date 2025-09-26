import { Route } from "@angular/router";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES : Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  }
];