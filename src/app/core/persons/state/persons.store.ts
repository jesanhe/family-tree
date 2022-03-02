import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Person } from './person.model';

export interface PersonsState extends EntityState<Person> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'persons' })
export class PersonsStore extends EntityStore<PersonsState, Person> {
  constructor() {
    super();
  }
}
