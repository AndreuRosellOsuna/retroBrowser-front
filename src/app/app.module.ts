import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesDbComponent } from './games-db/games-db.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GamesDbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
