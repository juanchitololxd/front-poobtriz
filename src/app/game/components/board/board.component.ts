import { Component, Input } from '@angular/core';
import { Buffo } from 'src/app/shared/models/Buffo.model';
import { Reborde } from 'src/app/shared/models/Reborde.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() background!: string[][];
  @Input() bgReborde!: Reborde[][];
  @Input() buffo: Buffo | undefined;

  constructor() {
  }
}
