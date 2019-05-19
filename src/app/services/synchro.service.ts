import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SynchroService {

  constructor(private http: HttpClient) { }

  doSynchro(): Observable<String> {
    return this.http.get<String>(environment.host + '/services/performSynchro');
  }
}
