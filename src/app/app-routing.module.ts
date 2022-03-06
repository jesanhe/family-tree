import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonListComponent } from './components/person-list/person-list.component';

const routes: Routes = [
  {
    path: 'person/:personId',
    component: PersonDetailsComponent,
  },
  { path: '', redirectTo: '/person', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PersonDetailsComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
