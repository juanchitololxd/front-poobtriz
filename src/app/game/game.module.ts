import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { GameService } from './services/game.service';
import { GameRoutingModule } from './game-routing.module';



@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  providers: [GameService]
})
export class GameModule { }
