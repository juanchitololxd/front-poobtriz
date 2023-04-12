import { Player } from "./Player.model";

export class Lobby{
  constructor(
      public codigo: number,
      public players: Player[],
      public estado: Estado = Estado.CREATED
  ){}
}


export enum Estado {
  CREATED,
  RUNNING,
  FINISHED
}
