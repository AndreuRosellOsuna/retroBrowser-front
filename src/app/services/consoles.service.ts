import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Console } from '../models/console.model';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  constructor(private http: HttpClient) { }

  getConsoles(): Observable<Console[]> {
    return this.http.get<Console[]>('http://localhost:3000/services/consoles');
  }
}
