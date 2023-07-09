import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent {
  @Output() changeall = new EventEmitter<string>();

  makeChange() {
    this.changeall.emit(
      (<HTMLInputElement>document.getElementById('inputTask')).value
    );
  }
}
