import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {IndexComponent} from './views/index/index.component';
import {GamesDbComponent} from './views/games-db/games-db.component';
import {SynchroComponent} from './views/synchro/synchro.component';

const routes: Routes = [
  { path : '', redirectTo : '/index', pathMatch: 'full'},
  { path : 'index', component : IndexComponent},
  { path : 'gamesDB', component : GamesDbComponent},
  { path : 'synchro', component : SynchroComponent}
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }
