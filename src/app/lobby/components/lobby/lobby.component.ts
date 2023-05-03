import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Lobby } from 'src/app/shared/models/Lobby.model';
import { WebsocketBuilder } from 'websocket-ts/lib';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})

export class LobbyComponent implements OnInit, OnDestroy {
  codigoPartida!: string;
  public ws: any;
  usuarios: String[]=[];
  parameterValue: any;
  lobby!: Lobby;



  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe((parameter : any) => {
      this.codigoPartida = parameter.id;
      this.ws = new WebsocketBuilder(`${environment.wsLobby}lobby/${localStorage.getItem('nick')!}/${this.codigoPartida}`)
      .onMessage((ws, e) => this.lobby = JSON.parse(e.data))
      .onClose((ws, e) => this.comenzarPartida()).build();
    })

  }

  comenzarPartida(): void {
    this._router.navigateByUrl(`/game/${this.codigoPartida}`)
  }

  ngOnDestroy(): void {
    this.ws.close();
  }



}
