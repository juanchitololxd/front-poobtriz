import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';


@NgModule({
  imports: [  RouterModule.forChild([
    { path: '', component: LobbyComponent }
  ])],


  exports: [RouterModule]
})
export class LobbyRoutingModule { }
