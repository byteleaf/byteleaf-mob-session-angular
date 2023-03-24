import { HttpClient } from '@angular/common/http';
import People from '../models/people';

export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople(): Promise<People[] | undefined> {
    return this.http
      .get<People[] | undefined>('https://swapi.dev/api/people')
      .toPromise();
  }
}
