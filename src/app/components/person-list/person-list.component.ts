import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/core/persons/state/person.model';
import { PersonsQuery } from 'src/app/core/persons/state/persons.query';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  persons$: Observable<Person[]> = this.personsQuery.selectAll();

  constructor(private personsQuery: PersonsQuery) {}

  ngOnInit(): void {}
}
