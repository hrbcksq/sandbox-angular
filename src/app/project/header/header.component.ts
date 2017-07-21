import { Navigation } from '../model/navigation.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private readonly NavigationType = Navigation;

  @Output() onNavigationChange = new EventEmitter<Navigation>();

  constructor() { }

  ngOnInit() {
  }

  navigate(input: Navigation) {
    this.onNavigationChange.emit(input);
  }

}
