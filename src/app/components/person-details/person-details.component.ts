import { Component, OnInit } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/core/persons/state/person.model';
import { PersonsQuery } from 'src/app/core/persons/state/persons.query';
import { PersonsService } from 'src/app/core/persons/state/persons.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  persons$: Observable<Person[]> = this.personsQuery.selectAll();
  person$!: Observable<Person>;

  constructor(
    private personsService: PersonsService,
    private personsQuery: PersonsQuery,
    private routerQuery: RouterQuery
  ) {}

  ngOnInit(): void {
    this.routerQuery
      .selectParams('pesonId')
      .subscribe((personId) => console.log(personId));
  }
}
