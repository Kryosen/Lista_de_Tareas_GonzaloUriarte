import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { ChechBoxComponent } from './chech-box/chech-box.component';
import { LinethroughBoxComponent } from './linethrough-box/linethrough-box.component';

@NgModule({
  declarations: [
    ButtonDeleteComponent,
    ChechBoxComponent,
    LinethroughBoxComponent,
  ],
  imports: [CommonModule],
  exports: [ChechBoxComponent, ButtonDeleteComponent, LinethroughBoxComponent],
})
export class SharedModule {}
