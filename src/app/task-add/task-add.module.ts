import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add/button-add.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskAddComponent } from './task-add.component';

@NgModule({
  declarations: [ButtonAddComponent, TaskInputComponent, TaskAddComponent],
  imports: [CommonModule],
  exports: [ButtonAddComponent, TaskInputComponent, TaskAddComponent],
})
export class TaskAddModule {}
