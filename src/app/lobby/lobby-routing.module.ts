import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { FormConnectLobbyComponentComponent } from './components/form-connect-lobby-component/form-connect-lobby-component.component';


@NgModule({
  imports: [  RouterModule.forChild([
    { path: '', component: LobbyComponent },
    { path: 'connect', component: FormConnectLobbyComponentComponent }
  ])],


  exports: [RouterModule]
})
export class LobbyRoutingModule { }
