import { GameItemsModule } from '../game-items/game-items.module';
import { GameService } from '../game-service/game-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';

@NgModule({
  imports: [
    CommonModule,
    GameItemsModule
  ],
  declarations: [GameComponent],
  exports: [GameComponent]
})
export class GameModule { }
