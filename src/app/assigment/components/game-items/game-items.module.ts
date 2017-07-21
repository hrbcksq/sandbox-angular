import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OddComponent, EvenComponent],
  exports: [OddComponent, EvenComponent]
})
export class GameItemsModule { }
