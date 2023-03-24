import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import People from '../../models/people';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          return of(params.get('id') as string);
        })
      )
      .subscribe((index) => {
        this.peopleService
          .getPerson(index)
          .then((person) => console.log(person));
      });
  }
}
