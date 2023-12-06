import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { LoadLobbyGuard } from '../lobby/guards/load-lobby.guard';

@NgModule({
  imports: [  RouterModule.forChild([
    { path: ':id', component: GameComponent, canActivate:[LoadLobbyGuard] }
    ,{path: "**", redirectTo: '/lobby/create', pathMatch:"full"}
  ])],


  exports: [RouterModule]
})
export class GameRoutingModule { }
