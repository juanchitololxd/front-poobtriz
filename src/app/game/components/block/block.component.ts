import { Component, Input } from '@angular/core';
import { Reborde } from 'src/app/shared/models/Reborde.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  @Input() color!: string;
  @Input() reborde: Reborde | undefined;
}
