import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Lobby } from 'src/app/shared/models/Lobby.model';
import { environment } from 'src/environments/environment';

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

  private baseUrl = environment.lobby; // URL de la API

  constructor(private http: HttpClient) {}

  async crearLobby(nick: string, addBot: boolean) {

    let lobby = Lobby.instanceEmptyLobby(nick, 12, 8, 1000, addBot);
    return await firstValueFrom(this.http.post(`${this.baseUrl}lobbies`, lobby)).then(
      (res : any) => <Lobby> res)

      .catch((error: any) => {console.log(error)
      return undefined})
  }

}
