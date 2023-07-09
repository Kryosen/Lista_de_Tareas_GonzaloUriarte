import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnChanges {
  @Input() item = '';

  tasks: any[] = ['Task N', 'Task K'];

  updateTask(value: string) {
    this.tasks.push(value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] && this.item) {
      this.updateTask(this.item);
    }
  }
}
