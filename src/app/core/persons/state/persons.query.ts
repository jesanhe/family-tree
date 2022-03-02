import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PersonsStore, PersonsState } from './persons.store';

@Injectable({ providedIn: 'root' })
export class PersonsQuery extends QueryEntity<PersonsState> {
  constructor(protected override store: PersonsStore) {
    super(store);
  }
}
