import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  private baseUrl = 'http://localhost:2000'; // URL de la API

  constructor(private http: HttpClient) {}

  async crearLobby(lobby: any) {
    return await firstValueFrom(this.http.post(`${this.baseUrl}/lobbies`, lobby))
  }

}
