import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatCardModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatInputModule]
})
export class HomeComponent {
  constructor(private router: Router) { }

  addTodo() {
    this.router.navigateByUrl('/add-todo');
  }
}
