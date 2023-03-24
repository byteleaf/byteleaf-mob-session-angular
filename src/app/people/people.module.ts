import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PeopleOverviewComponent } from './components/people-overview/people-overview.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [PeopleOverviewComponent],
  imports: [CommonModule, MatTableModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class PeopleModule {}
