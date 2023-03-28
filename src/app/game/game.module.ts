import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { GameService } from './services/game.service';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from './../shared/shared.module';
import { BoardComponent } from './components/board/board.component';
import { BlockComponent } from './components/block/block.component';



@NgModule({
  declarations: [
    GameComponent,
    BoardComponent,
    BlockComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ],
  providers: [GameService]
})
export class GameModule { }
