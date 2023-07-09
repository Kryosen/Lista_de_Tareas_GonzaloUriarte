import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { TaskComponent } from './task.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TaskDescriptionComponent, TaskComponent],
  imports: [CommonModule, SharedModule],
  exports: [TaskDescriptionComponent, SharedModule, TaskComponent],
})
export class TaskModule {}
