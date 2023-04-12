import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { FormCreateLobbyComponent } from 'src/app/lobby/components/form-create-lobby/form-create-lobby.component';
import { LoadLobbyGuard } from './guards/load-lobby.guard';
import { FormConnectLobbyComponentComponent } from './components/form-connect-lobby-component/form-connect-lobby-component.component';

@NgModule({
  imports: [  RouterModule.forChild([
    { path: 'create', component: FormCreateLobbyComponent },
    { path: 'connect', component: FormConnectLobbyComponentComponent },
    { path: ':id', component: LobbyComponent, canActivate:[LoadLobbyGuard] }
    

  ])],


  exports: [RouterModule]
})
export class LobbyRoutingModule { }
