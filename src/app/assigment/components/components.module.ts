import { GameComponent } from './game/game.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    GameComponent
  ],
  declarations: [GameComponent]
})
export class ComponentsModule { }
