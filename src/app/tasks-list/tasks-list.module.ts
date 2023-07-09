import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskModule } from './task/task.module';
import { TasksListComponent } from './tasks-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksListComponent],
  imports: [CommonModule, TaskModule, SharedModule],
  exports: [TaskModule, TasksListComponent, SharedModule],
})
export class TasksListModule {}
