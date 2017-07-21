
import { EventEmitter } from 'events';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  onIndexUpdate = new EventEmitter();
  index = 0;
  interval = 1e3;
  timerInterval;

  constructor() { }

  start() {
    if (!this.timerInterval) {
      this.timerInterval = setInterval(() => this.updateIndex(), this.interval);
    }
  }

  updateIndex() {
    this.onIndexUpdate.emit('updateIndex', ++this.index);
  }

  stop() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.index = 0;
  }
}
