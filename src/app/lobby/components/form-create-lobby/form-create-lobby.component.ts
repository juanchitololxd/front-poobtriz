import { Component } from '@angular/core';
import { LobbyService } from 'src/app/lobby/services/lobby.service'


@Component({
  selector: 'app-form-create-lobby',
  templateUrl: './form-create-lobby.component.html',
  styleUrls: ['./form-create-lobby.component.css']
})
export class FormCreateLobbyComponent {
  nombrePartida!: string;

  constructor(private lobbyService: LobbyService) {}

  crearPartida() {
    const nick = localStorage.getItem('nick');
    const lobby = {
      nombre: this.nombrePartida,
      admin: nick
    };
    this.lobbyService.crearLobby(lobby).then(
      (codigo: any) => {
        // Redirecciona a la página del lobby
      }
    ).catch((error: any) => {
      
    }
    );
  }
}



