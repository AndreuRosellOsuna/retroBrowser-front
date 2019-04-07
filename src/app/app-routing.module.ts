import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GamesDbComponent} from './games-db/games-db.component';

const routes: Routes = [
  { path : '', redirectTo : '/index', pathMatch: 'full'},
  { path : 'index', component : IndexComponent},
  { path : 'gamesDB', component : GamesDbComponent}
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }
