import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';



@NgModule({
  imports: [  RouterModule.forRoot([
    { path: '', component: LandingComponent},
    { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
    { path: 'lobby/:id', loadChildren: () => import('./lobby/lobby.module').then(m => m.LobbyModule) }

  ],
  {
    preloadingStrategy: PreloadAllModules
  }
  )],


  exports: [RouterModule]
})
export class AppRoutingModule { }
