import { FormsModule } from '@angular/forms';
import { DashboardItemModule } from '../dashboard-item/dashboard-item.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardItemModule,
    FormsModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
