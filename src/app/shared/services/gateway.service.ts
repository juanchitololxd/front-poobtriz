import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http: HttpClient) { }

  async getAvailableServer(idLobby: number) {
    let rta =await firstValueFrom(this.http.get(`${environment.gateway}/gateway/${idLobby}`)).then((res: any) => res.server)
    return rta
  }

}
