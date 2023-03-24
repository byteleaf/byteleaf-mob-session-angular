import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from './people/components/people-detail/people-details.component';
import { PeopleOverviewComponent } from './people/components/people-overview/people-overview.component';

const routes: Routes = [
  { path: '', component: PeopleOverviewComponent },
  { path: 'details/:id', component: PeopleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
