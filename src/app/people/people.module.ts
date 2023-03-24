import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PeopleOverviewComponent } from './components/people-overview/people-overview.component';

@NgModule({
  declarations: [PeopleOverviewComponent],
  imports: [CommonModule, MatTableModule],
})
export class PeopleModule {}
