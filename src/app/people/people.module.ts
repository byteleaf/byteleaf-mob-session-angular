import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, MatTableModule],
})
export class PeopleModule {}
