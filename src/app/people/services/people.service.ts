import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import People from '../models/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>('https://swapi.dev/api/people');
  }
}
