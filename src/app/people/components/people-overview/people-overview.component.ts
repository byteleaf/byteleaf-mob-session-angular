import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private peopleService: PeopleService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.peopleService.getPeople();
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

  goToDetails(index: number) {
    this.router.navigate(['/details', { id: index }]);
  }
}
