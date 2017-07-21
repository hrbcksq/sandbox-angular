import { GameService } from '../game-service/game-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  numbers = new Array<number>();

  constructor(private readonly _gameService: GameService) { }

  ngOnInit() {
    this._gameService.onIndexUpdate.on('updateIndex', (value) => this.onUpdate(value))
  }

  onStart() {
    this._gameService.start();
  }

  onStop() {
    this._gameService.stop();
  }

  onClear() {
    this.numbers = new Array<number>();
  }

  onUpdate(value: number) {
    console.log(this.numbers);
    this.numbers.push(value);
  }
}
