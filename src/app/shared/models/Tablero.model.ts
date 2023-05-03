import { Reborde } from "./Reborde.model";

export class Tablero {
  constructor(
      public background: string[][] = [],
      public bgReborde: Reborde[][] = [],
      public puntuacion: number = 0
    ){}
}
