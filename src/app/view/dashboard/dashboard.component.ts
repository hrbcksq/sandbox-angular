import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ServerType } from '../../model/enum/server.type';
import { Server } from '../../model/model.module';
import { Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges, OnDestroy {
  current: Server;
  list: Server[];
  @ViewChild('serverNameInput') nameInput: ElementRef;

  constructor() {
    this.current = new Server();
    this.list = new Array<Server>();
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
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

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Dashboard');
    console.log(changes);
  }

  changeFirstElement() {
    this.list[0].name = 'Changed';
  }

  destroyFirstElement() {
    this.list.splice(0, 1);
  }

}
