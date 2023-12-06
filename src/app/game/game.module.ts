import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GameComponent } from './components/game/game.component';
import { GameService } from './services/game.service';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from './../shared/shared.module';
import { BoardComponent } from './components/board/board.component';
import { GatewayService } from '../shared/services/gateway.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GameComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    HttpClientModule

  ],
  providers: [GameService, GatewayService]
})
export class GameModule { }
