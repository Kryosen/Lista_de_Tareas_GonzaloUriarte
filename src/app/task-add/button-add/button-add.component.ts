import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css'],
})
export class ButtonAddComponent {
  @Output() alert: EventEmitter<string> = new EventEmitter();

  makeAlert() {
    this.alert.emit();
  }
}
