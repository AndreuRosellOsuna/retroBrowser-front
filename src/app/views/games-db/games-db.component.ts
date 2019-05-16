import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { Console } from '../../models/console.model';
import { GamesService } from '../../services/games.service';
import { ConsolesService } from '../../services/consoles.service';

@Component({
  selector: 'app-games-db',
  templateUrl: './games-db.component.html',
  styleUrls: ['./games-db.component.css']
})
export class GamesDbComponent implements OnInit {

  title: string;
  games: Game[];
  consoles: Console[];
  selectedConsole: Console;

  constructor(
    private consoleService: ConsolesService,
    private gamesService: GamesService) { }

  ngOnInit() {
    this.title = 'games from db';
    this.consoleService.getConsoles().subscribe(consoles => {
      this.consoles = consoles;
      this.selectedConsole = this.consoles[0];
      this.gamesService.getGamesFromConsoleInDb(this.selectedConsole.name).subscribe(games => this.games = games);
    });
  }
}
