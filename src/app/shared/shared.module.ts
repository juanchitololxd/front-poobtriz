import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    TableModule, 
    FormsModule

  ]
})
export class SharedModule { }
