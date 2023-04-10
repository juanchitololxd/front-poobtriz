import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LobbyService } from './services/lobby.service';
import { LobbyRoutingModule } from './lobby-routing.module';
import { FormCreateLobbyComponent } from './components/form-create-lobby/form-create-lobby.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LobbyComponent,
    FormCreateLobbyComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [LobbyService]
})
export class LobbyModule { }
