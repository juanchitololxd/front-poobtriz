import { Component, OnInit } from '@angular/core';
import { GameWSService } from '../../services/game-ws.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private oGameWS: GameWSService){

  }

  ngOnInit(): void {
    this.oGameWS.open("Jaime", "11111", this.onOpen, this.onMessage);
  }

  onOpen(){

  }

  onMessage(param: any){
    console.log(param)
  }

  sendMsg(){
    this.oGameWS.moveBlockDown();
  }

}
