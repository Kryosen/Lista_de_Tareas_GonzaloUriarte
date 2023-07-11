import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnChanges {
  @Input() item = '';

  // tasks: any[] = ['Task N', 'Task K'];
  // checkboxStatus: any[] = [true, false];
  tasks: any[] = [
    { value: 'Task N', checkboxStatus: false },
    { value: 'Task K', checkboxStatus: false },
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['item'].isFirstChange()) {
      if (this.item) {
        this.tasks.unshift({ value: this.item, checkboxStatus: false });
      }
    }
  }

  deleteIndex(i: number) {
    this.tasks.splice(i, 1);
  }

  checkboxStatus(newItem: boolean, i: number) {
    this.tasks[i].checkboxStatus = newItem;
  }
}
