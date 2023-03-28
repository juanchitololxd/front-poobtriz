import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameWSService {

  private ws!: WebSocket;

  /**
   * Instancia una conexión websocket al juego
   * @param nick
   * @param codigo de la sala
   */
  open(nick: string, codigo: string, onOpen: Function, onMessage: Function){
    if (this.ws) throw new Error("El websocket ya está abierto!!");
    this.ws = new WebSocket(`ws://localhost:8081/game/${nick}/${codigo}`);
    this.ws.onopen = onOpen();
    this.ws.onmessage =function(m) {
      onMessage(JSON.parse(m.data));
    }
  }

  moveBlockDown(){
    this.ws.send(JSON.stringify({movimiento: "down"}));
  }

  moveBlockLeft(){
    this.ws.send(JSON.stringify({movimiento: "left"}));
  }

  moveBlockRight(){
    this.ws.send(JSON.stringify({movimiento: "right"}));
  }

  close(){
    this.ws.close();
  }
}
