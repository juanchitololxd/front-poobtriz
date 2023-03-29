import { Component, OnInit } from '@angular/core';
import { Lobby } from 'src/app/shared/models/Lobby.model';
import { Tablero } from 'src/app/shared/models/Tablero.model';
import { WebsocketBuilder } from 'websocket-ts/lib';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public tablero!: Tablero | undefined;
  public lobby!: Lobby;
  public nick = "Jaime"; //TODO dinamizar
  public codigo = 11111; //TODO dinamizar
  public ws: any;

  ngOnInit(): void {
    this.ws = new WebsocketBuilder(`ws://localhost:8081/game/${this.nick}/${this.codigo}`)
    .onOpen((ws, e) => { console.log("ABIERTO"); })
    .onClose((ws, e) => { console.log("CLOSED") })
    .onError((ws, e) => { console.log("error") })
    .onMessage((ws, e) => { this.onMessage(JSON.parse(e.data)) })
    .build();

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



  onMessage(param: any){
    this.lobby = param;
    this.tablero = this.lobby.players.find(p => p.nick == this.nick)?.tablero;

  }

  sendMsg(){
    this.ws.send("Hola mundo");
  }

}
