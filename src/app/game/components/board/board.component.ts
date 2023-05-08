import { Component, Input } from '@angular/core';
import { Tablero } from 'src/app/shared/models/Tablero.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() tablero!: Tablero;

  constructor() {
  }
}
