import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add/button-add.component';
import { TaskInputComponent } from './task-input/task-input.component';

@NgModule({
  declarations: [ButtonAddComponent, TaskInputComponent],
  imports: [CommonModule],
  exports: [ButtonAddComponent, TaskInputComponent],
})
export class TaskAddModule {}
