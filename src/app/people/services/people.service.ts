import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import People from '../models/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  async getPeople(): Promise<People[]> {
    const people = await this.http.get<any>('https://swapi.dev/api/people').pipe(map((data) => data.results)).toPromise() as People[];

    for(let person of people) {
      person.homeworld = (await this.http.get<any>(person.homeworld).toPromise()).name;
    }

    return people;
  }
}
