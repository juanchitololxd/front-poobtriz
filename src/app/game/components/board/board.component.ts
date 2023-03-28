import { Component, Input } from '@angular/core';
import { Tablero } from 'src/app/shared/models/Tablero.model';
import { Block } from '../../models/block.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() size: { rows: number; cols: number } = { rows: 20, cols: 10 };
  @Input() tablero!: Tablero;

  constructor() {
  }
}
