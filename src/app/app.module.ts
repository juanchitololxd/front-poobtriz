import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FormCreateLobbyComponent } from './lobby/components/form-create-lobby/form-create-lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    //FormCreateLobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
