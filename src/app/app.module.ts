import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesDbComponent } from './views/games-db/games-db.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule, MatIconModule, MatMenuModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ConsolePanelComponent } from './console-panel/console-panel.component';
import { GamesListComponent } from './games-list/games-list.component';
import { SynchroComponent } from './views/synchro/synchro.component';
import { RetroHeaderComponent } from './retro-header/retro-header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GamesDbComponent,
    ConsolePanelComponent,
    GamesListComponent,
    SynchroComponent,
    RetroHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
