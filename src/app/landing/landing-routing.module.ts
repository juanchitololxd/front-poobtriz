import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormCreateLobbyComponent } from '../lobby/components/form-create-lobby/form-create-lobby.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  imports: [  RouterModule.forChild([
    { path: '', component: LandingComponent },
    { path: 'lobby/create', component: FormCreateLobbyComponent}

  ])],


  exports: [RouterModule]
})
export class LandingRoutingModule { }
