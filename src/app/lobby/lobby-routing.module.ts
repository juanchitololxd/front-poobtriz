import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { FormCreateLobbyComponent } from 'src/app/lobby/components/form-create-lobby/form-create-lobby.component';

@NgModule({
  imports: [  RouterModule.forChild([
    { path: 'create', component: FormCreateLobbyComponent },
    { path: ':id', component: LobbyComponent }

  ])],


  exports: [RouterModule]
})
export class LobbyRoutingModule { }
