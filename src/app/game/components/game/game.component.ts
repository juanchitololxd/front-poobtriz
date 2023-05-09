import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Estado, Lobby } from 'src/app/shared/models/Lobby.model';
import { Tablero } from 'src/app/shared/models/Tablero.model';
import { Websocket, WebsocketBuilder } from 'websocket-ts/lib';
import { Reborde } from 'src/app/shared/models/Reborde.model';


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

  public nextPiece!: {
    bg: string[][],
    bgReborde: Reborde[][]
  }
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
    if (this.lobby.estado == Estado[Estado.RUNNING]) this.blockedDocument = false;
    this.tablero = this.lobby.players.find(p => p.nick == this.nick)?.tablero;

    this.createNextPieceBoard();
  }

  private createNextPieceBoard(){
    let bg: string[][] = [];
    let bgReborde: Reborde[][] = [];
    let colorBg = "gray";
    if (this.tablero && this.tablero.nextPiece){
      for (let index = 0; index < this.tablero.nextPiece.height + 2; index++) {
        let bgRow = [];
        let rebordeRow = [];
        for (let col = 0; col < this.tablero.nextPiece.width + 2; col++) {
          bgRow.push(colorBg)
          rebordeRow.push(new Reborde("black"));
        }
        bg.push(bgRow);
        bgReborde.push(rebordeRow);
      }

      this.tablero.nextPiece.coordenadas.forEach(coord => {
        if (this.tablero) {
          bg[coord[1]+1][coord[0]+1] = this.tablero.nextPiece.color;
          bgReborde[coord[1]+1][coord[0]+1] = this.tablero.nextPiece.reborde;
        }
      });

      this.nextPiece = {
        bg: bg,
        bgReborde: bgReborde
      }
    }

  }

}
