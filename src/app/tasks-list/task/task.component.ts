import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnChanges {
  @Input() item = '';

  tasks: any[] = ['Task N', 'Task K'];

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['item'].isFirstChange()) {
      this.tasks.push(this.item);
    }
  }
}
