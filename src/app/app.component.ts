import { Navigation } from './project/model/navigation.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly NavigationType = Navigation;
  currentNavigation: Navigation;

  onNavigation(input: Navigation) {
    this.currentNavigation = input;
  }

}
