import { Player } from "./Player.model";

export class Lobby{
  constructor(
      public codigo: number,
      public players: Player[],
  ){}
}
