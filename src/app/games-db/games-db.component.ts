import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';

const gamesMock: Game[] = [
  {name: 'game1'},
  {name: 'game2'},
  {name: 'game3'},
  {name: 'game4'}
];

@Component({
  selector: 'app-games-db',
  templateUrl: './games-db.component.html',
  styleUrls: ['./games-db.component.css']
})
export class GamesDbComponent implements OnInit {

  title: string;
  games: Game[];

  constructor() { }

  ngOnInit() {
    this.title = 'games from db';
    this.games = gamesMock;
  }

}
