import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LobbyService } from './services/lobby.service';
import { LobbyRoutingModule } from './lobby-routing.module';
import { FormConnectLobbyComponentComponent } from './components/form-connect-lobby-component/form-connect-lobby-component.component';
import { FormCreateLobbyComponent } from './components/form-create-lobby/form-create-lobby.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { GatewayService } from '../shared/services/gateway.service';



@NgModule({
  declarations: [
    LobbyComponent,
    FormConnectLobbyComponentComponent,
    FormCreateLobbyComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    SharedModule,
    HttpClientModule,
    CardModule,
    ChipModule
  ],
  providers: [LobbyService, GatewayService]
})
export class LobbyModule { }
