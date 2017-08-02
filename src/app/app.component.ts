import { Navigation } from './project/model/navigation.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5, 7];
  evenNumbers = [2, 4, 6, 8];
  onlyOdd = false;
  value = 1;

  constructor() {
    setInterval(() => {
      if (this.value >= 10000) {
        this.value = 1;
      } else {
        this.value *= 10;
      }
    }, 500)
  }
}
