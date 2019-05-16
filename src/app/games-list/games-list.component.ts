import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../models/game.model';
import { Console } from '../models/console.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  @Input()
  games: Game[];
  constructor() { }

  ngOnInit() {
  }
}
