import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  imports: [  RouterModule.forChild([
    { path: '', component: GameComponent },
    { path: 'board', component: BoardComponent }
  ])],


  exports: [RouterModule]
})
export class GameRoutingModule { }
