import { Component, OnInit } from '@angular/core';
import { LobbyService } from 'src/app/lobby/services/lobby.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lobby } from 'src/app/shared/models/Lobby.model';


@Component({
  selector: 'app-form-create-lobby',
  templateUrl: './form-create-lobby.component.html',
  styleUrls: ['./form-create-lobby.component.scss']
})
export class FormCreateLobbyComponent implements OnInit {
  nombrePartida!: string;
  addBot: boolean = false;

  constructor(private lobbyService: LobbyService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.queryParams.forEach((param) => {

      this.addBot = param && param["bot"] == "1" ? true : false;
    })
  }

  crearPartida() {
    this.lobbyService.crearLobby(this.nombrePartida, this.addBot).then(

      (respuesta: Lobby|undefined) => {
        if (respuesta){
          localStorage.setItem('nick', this.nombrePartida); // Guardar el nick del usuario en el localStorage
          this.router.navigate(['/lobby/' + respuesta?.codigo]); // Redireccionar a la página del lobby creado
        }

      }

    );
  }
}



