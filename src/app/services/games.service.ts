import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient) { }

  public getAllGamesInDb(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:3000/services/games');
  }

  public getGamesFromConsoleInDb(consoleName: string): Observable<Game[]> {
    return this.http.get<Game[]>(`http://localhost:3000/services/games?console=${consoleName}`);
  }
}
