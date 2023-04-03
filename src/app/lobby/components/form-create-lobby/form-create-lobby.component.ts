import { Component } from '@angular/core';
import { LobbyService } from 'src/app/lobby/services/lobby.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-create-lobby',
  templateUrl: './form-create-lobby.component.html',
  styleUrls: ['./form-create-lobby.component.css']
})
export class FormCreateLobbyComponent {
  nombrePartida!: string;

  constructor(private lobbyService: LobbyService, private router: Router) {}

  ngOnInit(): void {
  }

  crearPartida() {
    const nick = JSON.parse(localStorage.getItem('nick')!);
    const lobby = {nombre: this.nombrePartida, admin: nick };
    this.lobbyService.crearLobby(lobby).then(
      (respuesta: any) => {
        localStorage.setItem('nick', nick); // Guardar el nick del usuario en el localStorage
        this.router.navigate(['/lobby/' + respuesta.codigo]); // Redireccionar a la página del lobby creado
      }
    ).catch((error: any) => {console.log(error)}
    );
  }
}



