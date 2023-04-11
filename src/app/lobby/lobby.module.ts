import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LobbyService } from './services/lobby.service';
import { LobbyRoutingModule } from './lobby-routing.module';
import { FormConnectLobbyComponentComponent } from './components/form-connect-lobby-component/form-connect-lobby-component.component';


@NgModule({
  declarations: [
    LobbyComponent,
    FormConnectLobbyComponentComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule
  ],
  providers: [LobbyService]
})
export class LobbyModule { }
