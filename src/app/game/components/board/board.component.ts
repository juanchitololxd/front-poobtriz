import { Component, Input } from '@angular/core';
import { Block } from '../../models/block.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() size: { rows: number; cols: number } = { rows: 20, cols: 10 };
  board: Block[][] = [];

  constructor() {
    for (let i = 0; i < this.size.rows; i++) {
      this.board.push([]);
      for (let j = 0; j < this.size.cols; j++) {
        this.board[i].push(new Block("red","blue"));
      }
    }
  }
}
