import { Reborde } from "./Reborde.model";
import {Buffo} from "./Buffo.model";

export class Tablero {
  constructor(
      public background: string[][] = [],
      public bgReborde: Reborde[][] = [],
      public puntuacion: number = 0,
      public buffo: Buffo | undefined = undefined
    ){}
}
