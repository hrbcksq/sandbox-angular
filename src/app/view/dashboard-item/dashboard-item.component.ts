import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Server } from 'app/model/model.module';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardItemComponent implements OnInit {
  @Input() item: Server;

  constructor() { }

  ngOnInit() {

  }

}
