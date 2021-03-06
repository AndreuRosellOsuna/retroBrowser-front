import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Console } from '../models/console.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  constructor(private http: HttpClient) { }

  getConsoles(): Observable<Console[]> {
    return this.http.get<Console[]>(environment.host + '/services/consoles');
  }
}
