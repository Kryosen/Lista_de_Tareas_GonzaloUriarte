import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTaskValue = '';

  receivetask(value: string) {
    this.newTaskValue = value;
    console.log(this.newTaskValue);
  }
}
