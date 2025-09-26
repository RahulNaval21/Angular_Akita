import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, CommonModule]
})
export class AppComponent {
  title = 'Angular_Akita';
  data: any;

  constructor(private service: AppService) {
    
  }
  getAllTodos() {
    this.service.getAllTodos().subscribe(res => {
      this.data = res;
    });
  }

  getOneTodo() {
    this.service.getTodo(1).subscribe(res => {
      this.data = res;
    });
  }
}
