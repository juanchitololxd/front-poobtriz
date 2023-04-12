import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Lobby } from 'src/app/shared/models/Lobby.model';
import { Player } from 'src/app/shared/models/Player.model';
import { Tablero } from 'src/app/shared/models/Tablero.model';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  async joinLobby(codigo: number) {
    return await firstValueFrom(this.http.get(`${this.baseUrl}/lobbies/${codigo}`)).then(
      (res : any) => <Lobby> res)

      .catch((error: any) => {console.log(error)
      return undefined})
  }

  private baseUrl = 'http://localhost:8081'; // URL de la API

  constructor(private http: HttpClient) {}

  async crearLobby(nick: string) {
    let lobby = new Lobby(123, [new Player(nick, new Tablero(0,0,[],[],0))])
    return await firstValueFrom(this.http.post(`${this.baseUrl}/lobbies`, lobby)).then(
      (res : any) => <Lobby> res)

      .catch((error: any) => {console.log(error)
      return undefined})
  }

}
