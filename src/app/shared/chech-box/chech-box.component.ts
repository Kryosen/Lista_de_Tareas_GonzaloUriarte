import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chech-box',
  templateUrl: './chech-box.component.html',
  styleUrls: ['./chech-box.component.css'],
})
export class ChechBoxComponent {
  @Output() newItemEvent = new EventEmitter<boolean>();

  checkStatus(value: any) {
    this.newItemEvent.emit(value.target.checked);
  }
}
