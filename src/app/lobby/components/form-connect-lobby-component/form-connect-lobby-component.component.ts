import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LobbyService } from '../../services/lobby.service';
import { Lobby } from 'src/app/shared/models/Lobby.model';

@Component({
  selector: 'app-form-connect-lobby-component',
  templateUrl: './form-connect-lobby-component.component.html',
  styleUrls: ['./form-connect-lobby-component.component.scss']
})
export class FormConnectLobbyComponentComponent {
  codigo!: number;
  nick!: string;

  constructor(private lobbyService: LobbyService, private router: Router) {}

  onSubmit() {
    this.lobbyService.joinLobby(this.codigo).then(
      (response: Lobby|undefined) => {
      if (response){
        localStorage.setItem('nick', this.nick);
        this.router.navigate(['/lobby', response.codigo]);
      } 
      else {
          alert('Error al unirse a la sala');
       }
      }
    );
  }
}
