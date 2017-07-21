import { GameService } from './assigment/components/game-service/game-service.service';
import { GameModule } from './assigment/components/game/game.module';
import { FormsModule } from '@angular/forms';
import { DashboardItemModule } from './view/dashboard-item/dashboard-item.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './view/view.module'
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    ServiceModule,
    GameModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
