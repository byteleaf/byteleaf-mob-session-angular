import { Component, OnInit } from '@angular/core';
import { PEOPLE_DATA } from './people-data';
import People from '../../models/people';

@Component({
  selector: 'app-people-overview',
  templateUrl: './people-overview.component.html',
  styleUrls: ['./people-overview.component.scss'],
})
export class PeopleOverviewComponent {
  filterValue: string = '';
  displayedColumns: string[] = ['name', 'gender', 'birth_year', 'homeworld'];
  dataSource = PEOPLE_DATA;

  getFilteredData(): People[] {
    return this.dataSource.filter((person: People) => {
      return person.name.toLowerCase().includes(this.filterValue.toLowerCase());
    });
  }
}
