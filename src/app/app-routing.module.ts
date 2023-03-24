import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleOverviewComponent } from './people/components/people-overview/people-overview.component';

const routes: Routes = [{ path: '', component: PeopleOverviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
