import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsocketBuilder } from 'websocket-ts/lib';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})

export class LobbyComponent implements OnInit {
  codigoPartida!: string;
  public ws: any;
  usuarios: String[]=[];
  parameterValue: any;



  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe((parameter : any) => {
      this.codigoPartida = parameter.id;
      this.ws = new WebsocketBuilder(`ws://localhost:8081/lobby/${localStorage.getItem('nick')!}/${this.codigoPartida}`)
      .onClose((ws, e) => this._router.navigateByUrl(`/game/${this.codigoPartida}`)).build();
    })

  }

  comenzarPartida(): void {
    // Lógica para comenzar la partida
  }



}
