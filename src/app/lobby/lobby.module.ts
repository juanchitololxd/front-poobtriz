import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LobbyService } from './services/lobby.service';
import { LobbyRoutingModule } from './lobby-routing.module';


@NgModule({
  declarations: [
    LobbyComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule
  ],
  providers: [LobbyService]
})
export class LobbyModule { }
