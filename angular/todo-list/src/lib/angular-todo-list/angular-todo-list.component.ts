import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-angular-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-todo-list.component.html',
  styleUrl: './angular-todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularTodoListComponent {}
