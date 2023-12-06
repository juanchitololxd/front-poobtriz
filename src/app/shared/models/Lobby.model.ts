import { Player } from "./Player.model";
import { Tablero } from "./Tablero.model";

export class Lobby{

  constructor(
      public codigo: number,
      public players: Player[],
      public filas: number,
      public cols: number,
      public estado: string = "CREATED",
      public velocity = 2000,
      public admin: Player | undefined = undefined,
      public bot: Player | undefined = undefined,
  ){
    if (players.length > 0) this.admin = players[0];
  }

  public static instanceEmptyLobby(nick: string, filas: number, cols: number, velocity: number, addBot: boolean): Lobby{
    let admn =new Player(nick, new Tablero());
    let bot = addBot ? structuredClone(admn) : undefined;
    if (bot) bot.nick = "BOT";
    return new Lobby(0, [admn], filas, cols,"CREATED", velocity, admn, bot);
  }
}


export enum Estado {
  CREATED,
  RUNNING,
  FINISHED
}
