import { Component, OnInit } from '@angular/core';
import { PEOPLE_DATA } from './people-data';
import People from '../../models/people';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-overview',
  templateUrl: './people-overview.component.html',
  styleUrls: ['./people-overview.component.scss'],
})
export class PeopleOverviewComponent implements OnInit {
  filterValue: string = '';
  displayedColumns: string[] = ['name', 'gender', 'birth_year', 'homeworld'];
  dataSource: People[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((people) => {
      this.dataSource = people.results;
      console.log(people);
    });
  }

  getFilteredData(): People[] {
    return this.dataSource
      ? this.dataSource.filter((person: People) => {
          return person.name
            .toLowerCase()
            .includes(this.filterValue.toLowerCase());
        })
      : [];
  }
}
