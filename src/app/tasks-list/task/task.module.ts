import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDescriptionComponent } from './task-description/task-description.component';

@NgModule({
  declarations: [TaskDescriptionComponent],
  imports: [CommonModule],
  exports: [TaskDescriptionComponent],
})
export class TaskModule {}
