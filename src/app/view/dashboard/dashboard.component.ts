import { ServerType } from '../../model/enum/server.type';
import { Server } from '../../model/model.module';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  current: Server;
  list: Server[];
  @ViewChild('serverNameInput') nameInput: ElementRef;

  constructor() {
    this.current = new Server();
    this.list = new Array<Server>();
  }

  ngOnInit() {
  }

  onAdd() {
    console.log(this.nameInput.nativeElement.value);
    if (this.current.isValid()) {
      this.list.push(this.current);
    }
    this.refresh()
  }

  onAddBlueprint() {
    this.current.type = ServerType.Blueprint;
    this.onAdd();
  }

  refresh() {
    this.current = new Server();
  }

}