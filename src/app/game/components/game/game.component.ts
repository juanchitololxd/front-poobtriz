import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Estado, Lobby } from 'src/app/shared/models/Lobby.model';
import { Tablero } from 'src/app/shared/models/Tablero.model';
import { Websocket, WebsocketBuilder } from 'websocket-ts/lib';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public tablero!: Tablero | undefined;
  public lobby!: Lobby;
  public nick: string | null;
  public ws!: Websocket;
  blockedDocument = true;
  constructor(
    private route: ActivatedRoute){
      this.nick = localStorage.getItem("nick")
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.instanceWS(params.get('id'));
    });


    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.ws.send("up");
          break;
        case "ArrowDown":
          this.ws.send("down");
          break;
        case "ArrowLeft":
          this.ws.send("left");
          break;
        case "ArrowRight":
          this.ws.send("right");
          break;
      }
    });
  }

  instanceWS(codigo: any){
    if (this.ws) this.ws.close();

    this.ws = new WebsocketBuilder(`${environment.wsGame}/game/${this.nick}/${codigo}`)
    .onOpen((ws, e) => { console.log("ABIERTO"); })
    .onClose((ws, e) => { console.log("CLOSED") })
    .onError((ws, e) => { console.log("error") })
    .onMessage((ws, e) => { this.onMessage(JSON.parse(e.data)) })
    .build();
  }


  onMessage(param: Lobby){
    this.lobby = param;
    if (this.lobby.estado.toString() == Estado[Estado.RUNNING]) this.blockedDocument = false;


    this.tablero = this.lobby.players.find(p => p.nick == this.nick)?.tablero;
  }

}
