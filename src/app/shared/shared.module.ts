import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { BlockedComponent } from './components/blocked/blocked.component';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [
    BlockedComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  exports: [
    ButtonModule,
    TableModule,
    BlockedComponent

  ]
})
export class SharedModule { }
