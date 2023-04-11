import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LobbyService } from '../../services/lobby.service';

@Component({
  selector: 'app-form-connect-lobby-component',
  templateUrl: './form-connect-lobby-component.component.html',
  styleUrls: ['./form-connect-lobby-component.component.scss']
})
export class FormConnectLobbyComponentComponent {
  codigo: string = '';
  nick: string = '';

  constructor(private lobbyService: LobbyService, private router: Router) {}

  onSubmit() {
    this.lobbyService.joinLobby(this.codigo).subscribe(
      (response) => {
        localStorage.setItem('nick', this.nick);
        this.router.navigate(['/lobby', response.codigo]);
      },
      (error) => {
        if (error.status === 404) {
          alert('La sala no existe');
        } else {
          alert('Error al unirse a la sala');
        }
      }
    );
  }
}
