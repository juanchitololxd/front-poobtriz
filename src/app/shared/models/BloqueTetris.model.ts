import { Reborde } from "./Reborde.model";

export class BloqueTetris {
  constructor(
    public color: string = "red",
    public reborde: Reborde = new Reborde(),
    public coordenadas: number[][] = [],
    public x = 0,
    public y = 0,
    public height = 1,
    public width = 1
  ) {

  }
}
