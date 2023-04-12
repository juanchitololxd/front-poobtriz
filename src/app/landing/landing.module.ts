import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
//import { FormCreateLobbyComponent } from '../lobby/components/form-create-lobby/form-create-lobby.component';




@NgModule({
  declarations: [
    LandingComponent
   // FormCreateLobbyComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
