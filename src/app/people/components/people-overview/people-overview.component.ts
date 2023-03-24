import { Component } from '@angular/core';
import { PEOPLE_DATA } from './people-data';

@Component({
  selector: 'app-people-overview',
  templateUrl: './people-overview.component.html',
  styleUrls: ['./people-overview.component.scss'],
})
export class PeopleOverviewComponent {
  displayedColumns: string[] = ['name', 'gender', 'birth_year', 'homeworld'];
  dataSource = PEOPLE_DATA;
}
