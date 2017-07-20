import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardItemComponent } from './dashboard-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardItemComponent],
  exports: [DashboardItemComponent]
})
export class DashboardItemModule { }
