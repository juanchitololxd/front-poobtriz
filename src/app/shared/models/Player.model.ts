import { Tablero } from "./Tablero.model";

export class Player{
  constructor(
      public nick: string,
      public tablero: Tablero,
  ){

  }
}
