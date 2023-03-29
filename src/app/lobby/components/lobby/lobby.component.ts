import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})

export class LobbyComponent implements OnInit {
  codigoPartida!: string;

  usuarios: String[]=[];


  constructor() { }

  ngOnInit(): void {
    // Generar código de partida aleatorio
    this.codigoPartida = Math.random().toString(36).substring(2, 8);

    // Simular usuarios conectados
    this.usuarios = ['Usuario 1', 'Usuario 2', 'Usuario 3'];
  }

}
