import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  visible: boolean;
  password: string;
  log = new Array<string>();

  constructor() {
    this.visible = false;
  }

  onShowClick() {
    this.visible = !this.visible;
    this.log.push(`${Date.now()} - State: ${this.visible ? 'visible' : 'hidden'}`)
  }

  ngOnInit() {
  }

}
