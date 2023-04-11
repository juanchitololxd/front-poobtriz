import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.scss']
})
export class BlockedComponent {
@Input() blocked: boolean = false;
@Input() message!: string;

}
